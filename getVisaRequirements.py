from browsermobproxy import Server
from selenium import webdriver


server = Server("C:\\Users\\youss\\OneDrive\\Desktop\\workDir\\browsermob-proxy-2.1.4\\bin\\browsermob-proxy", options={'use_littleproxy': False})
server.start()
proxy = server.create_proxy()

options = webdriver.ChromeOptions()
options.add_argument(f'--proxy-server={proxy.proxy}')
driver = webdriver.Chrome(chrome_options=options)

driver.get("http://www.twitter.com")

proxy.new_har("myhar")
with open('myhar.har', 'w') as f:
    f.write(str(proxy.har))