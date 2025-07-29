from fastapi import FastAPI, Request
from collapse_core import collapse_dx

app = FastAPI()

@app.get("/")
def root():
    return {"msg": "Collapse Witness Online"}

@app.get("/dx")
def collapse_endpoint(x: float):
    result = collapse_dx(x)
    return {"input": x, "dx": str(result)}
