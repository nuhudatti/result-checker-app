import sqlite3
import pandas as pd


connector = sqlite3.connect('information_data.db')
cursor = connector.cursor()

connector.execute(
""" CREATE TABLE IF NOT EXISTS customers_information (
NAME TEXT,

)
""")
 


connector.commit()
connector.close()


def saving_data():
    connector = sqlite3.connect('information_data.db')
    cursor = connector.cursor()
    
    connector.execute("INSERT INTO customers_information (name ) VALUES (?,?,?,?,?,?,?)",( ))

    connector.commit()
    connector.close()
    
def retrieve_records():
    results = []
    connector = sqlite3.connect('information_data.db')
    cursor = connector.cursor()
    query = "SELECT NAME, from customers_information"
    cursor.execute(query)
    for ROW in cursor:
        results.append(list(ROW))
        
    return results

def getting_records():
    customer_records = retrieve_records()
    return customer_records


def creating_records():
    customer_records_array = getting_records()
    head = []
    
    pd.DataFrame(customer_records_array)
    
    
    
    
     
