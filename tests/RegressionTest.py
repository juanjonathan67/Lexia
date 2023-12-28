import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

class RegressionTests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.base_url = "http://localhost:5173"  # Update with your development server URL

    def tearDown(self):
        self.driver.quit()

    def test_register_and_login(self):
        # Test Registration
        self.driver.get(self.base_url + "/register")
        self.register_user("John Doe", "john_doe", "john@example.com", "password123")

        # Test Login
        self.driver.get(self.base_url + "/login")
        self.login_user("john_doe", "password123")

    def test_invalid_login(self):
        # Test Login with invalid credentials
        self.driver.get(self.base_url + "/login")
        self.login_user("nonexistent_user", "invalid_password")

    def register_user(self, fullname, username, email, password):
        self.driver.find_element(By.ID, 'fullname').send_keys(fullname)
        self.driver.find_element(By.ID, 'username').send_keys(username)
        self.driver.find_element(By.ID, 'email').send_keys(email)
        self.driver.find_element(By.ID, 'password').send_keys(password)
        self.driver.find_element(By.ID, 'password-confirm').send_keys(password)

        self.driver.find_element(By.CSS_SELECTOR, '[type="submit"]').click()
        time.sleep(2)  # Adjust wait time as needed

    def login_user(self, username, password):
        self.driver.find_element(By.ID, 'username').send_keys(username)
        self.driver.find_element(By.ID, 'password').send_keys(password)

        self.driver.find_element(By.CSS_SELECTOR, '[type="submit"]').click()
        time.sleep(2)  # Adjust wait time as needed

if __name__ == '__main__':
    unittest.main()