import re

def autocorrect(text: str) -> str:
  regex = r"\b(you+|u)\b"
  return re.sub(regex, "your client", text, flags=re.IGNORECASE)


print(autocorrect("We have sent the deliverables to You."))
print(autocorrect("Youtube"))
print(autocorrect("U look good, man. I hope U get the money."))
print(autocorrect("Our team is excited to finish this with you."))
print(autocorrect("Our is with youuuuu"))
print(autocorrect("Our t is with uuu"))