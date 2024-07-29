import http.server
import socketserver

PORT = 25565

Handler = http.server.SimpleHTTPRequestHandler

# 使用 socketserver.TCPServer 创建一个TCP服务器
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()