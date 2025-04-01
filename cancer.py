import smtplib
import dns.resolver

def email_exists(email):
    domain = email.split('@')[-1]  # Extrage domeniul (ex: gmail.com)

    try:
        # 1️⃣ Caută serverele de email (MX records)
        mx_records = dns.resolver.resolve(domain, 'MX')
        mx_host = str(mx_records[0].exchange)  # Ia primul server de email

        # 2️⃣ Conectare la server SMTP
        server = smtplib.SMTP(mx_host)
        server.set_debuglevel(0)  # Setează 1 dacă vrei să vezi logurile
        server.helo()
        server.mail('test@example.com')  # Expeditor fals (pentru testare)
        
        # 3️⃣ Întreabă serverul dacă emailul există
        code, message = server.rcpt(email)
        server.quit()

        return code == 250  # Dacă codul este 250, emailul există
    except Exception as e:
        return False  # Dacă apar erori, emailul nu poate fi verificat

# 📌 Testează codul
email = "test@gmail.com"
if email_exists(email):
    print(f"✅ Emailul {email} există!")
else:
    print(f"❌ Emailul {email} NU există sau serverul nu permite verificarea!")
