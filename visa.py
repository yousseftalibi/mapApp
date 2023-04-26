from browsermobproxy import Server
from selenium import webdriver
import json

server = Server("C:\\Users\\youss\\OneDrive\\Desktop\\workDir\\browsermob-proxy-2.1.4\\bin\\browsermob-proxy.bat")
server.start()
proxy = server.create_proxy()
profile = webdriver.FirefoxProfile()
profile.set_proxy(self.proxy.selenium_proxy())
driver = webdriver.Firefox(firefox_profile=profile)
proxy.new_har("http://stackoverflow.com", options={'captureHeaders': True})
driver.get("http://stackoverflow.com")    
result = json.dumps(proxy.har, ensure_ascii=False)
print(result)
proxy.stop()    
driver.quit()