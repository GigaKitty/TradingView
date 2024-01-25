from selenium import webdriver

# Set the path to the chromedriver executable
chromedriver_path = '/usr/bin/chromedriver'

# Create a new instance of the Chrome driver
driver = webdriver.Chrome(chromedriver_path)

# Navigate to the website you want to scrape
driver.get('https://www.example.com')

# Perform scraping operations using Selenium commands
# ...

# Close the browser window
driver.quit()
