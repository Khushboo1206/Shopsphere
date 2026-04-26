from fastapi import FastAPI
from sqlalchemy import text
from database import engine

app = FastAPI()


# HOME ROUTE
@app.get("/")
def home():
    return {"message": "ShopSphere Backend Running"}


# PRODUCTS API
@app.get("/products")
def get_products():

    with engine.connect() as connection:

        result = connection.execute(text("""
            SELECT
                product_id,
                product_name,
                price,
                stock_quantity
            FROM products
        """))

        products = []

        for row in result:
            products.append({
                "product_id": row.product_id,
                "product_name": row.product_name,
                "price": float(row.price),
                "stock_quantity": row.stock_quantity
            })

        return products


# TOP PRODUCTS ANALYTICS API
@app.get("/top-products")
def top_products():

    with engine.connect() as connection:

        result = connection.execute(text("""
            SELECT
                p.product_name,
                
                SUM(oi.quantity) AS total_units_sold,
                
                SUM(oi.quantity * oi.price) AS total_revenue
                
            FROM order_items oi
            
            JOIN products p
            ON oi.product_id = p.product_id
            
            GROUP BY p.product_name
            
            ORDER BY total_units_sold DESC;
        """))

        products = []

        for row in result:
            products.append({
                "product_name": row.product_name,
                "total_units_sold": row.total_units_sold,
                "total_revenue": float(row.total_revenue)
            })

        return products


# CUSTOMER RANKINGS API
@app.get("/customer-rankings")
def customer_rankings():

    with engine.connect() as connection:

        result = connection.execute(text("""
            SELECT
                u.first_name,
                
                SUM(o.total_amount) AS total_spent,
                
                RANK() OVER (
                    ORDER BY SUM(o.total_amount) DESC
                ) AS customer_rank
                
            FROM users u
            
            JOIN orders o
            ON u.user_id = o.user_id
            
            GROUP BY u.first_name;
        """))

        customers = []

        for row in result:
            customers.append({
                "customer_name": row.first_name,
                "total_spent": float(row.total_spent),
                "customer_rank": row.customer_rank
            })

        return customers


# INVENTORY ALERTS API
@app.get("/inventory-alerts")
def inventory_alerts():

    with engine.connect() as connection:

        result = connection.execute(text("""
            SELECT
                p.product_name,
                
                i.stock_quantity,
                
                i.reorder_level
                
            FROM inventory i
            
            JOIN products p
            ON i.product_id = p.product_id
            
            WHERE i.stock_quantity <= i.reorder_level;
        """))

        alerts = []

        for row in result:
            alerts.append({
                "product_name": row.product_name,
                "stock_quantity": row.stock_quantity,
                "reorder_level": row.reorder_level
            })

        return alerts


# REVENUE SUMMARY API
@app.get("/revenue-summary")
def revenue_summary():

    with engine.connect() as connection:

        result = connection.execute(text("""
            SELECT
                DATE(created_at) AS order_date,
                
                SUM(total_amount) AS daily_revenue
                
            FROM orders
            
            GROUP BY order_date
            
            ORDER BY order_date;
        """))

        revenue_data = []

        for row in result:
            revenue_data.append({
                "order_date": str(row.order_date),
                "daily_revenue": float(row.daily_revenue)
            })

        return revenue_data