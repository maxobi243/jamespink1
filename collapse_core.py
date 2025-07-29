import cmath

def collapse_dx(x):
    try:
        if x == 0:
            return 0
        dx = x / 0  # Collapse trigger
    except ZeroDivisionError:
        dx = complex("inf")

    if dx == complex("inf"):
        return 0
    return dx
