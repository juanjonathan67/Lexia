from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import unittest

class RegisterTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()  # Update with the path to your chromedriver executable
        self.driver.get('http://localhost:5173/register')  # Update with the URL of your development server

    def test_registration(self):
        # Fill in form fields
        self.driver.find_element(By.ID, 'fullname').send_keys('John Doe')
        self.driver.find_element(By.ID, 'username').send_keys('john_doe')
        self.driver.find_element(By.ID, 'email').send_keys('john@example.com')
        self.driver.find_element(By.ID, 'password').send_keys('password123')
        self.driver.find_element(By.ID, 'password-confirm').send_keys('password123')

        # Click the register button
        self.driver.find_element(By.CSS_SELECTOR, '[type="submit"]').click()

        # Wait for the asynchronous registration process to complete
        time.sleep(5)  # You might need to replace this with more robust waiting strategies

        # Perform assertions as needed
        # For example, check if the login is successful by verifying the presence of an element on the redirected page
        self.assertTrue(self.driver.find_element(By.ID, 'username').is_displayed())

    def tearDown(self):
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()