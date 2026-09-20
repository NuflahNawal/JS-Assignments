var totalRows = 7;

for (var i = 1; i <= totalRows; i++) {
    document.write("<div style='text-align: center;'>");
    
    for (var j = 1; j <= i; j++) {
        document.write(" * ");
    }
    
    document.write("</div>");
}

for (var i = 8; i >= 1; i--) {
    // jab i = 5 hoga, ye loop next step par chala jayega (skip ho jayega)
    if (i === 5) {
        continue;
    }

    for (var j = 1; j <= i; j++) {
        document.write(" * ");
    }
    document.write("<br><br>"); // gap ke liye do baar <br>
}

for (var i = 8; i >= 1; i--) {
    // Agar i 5 ke barabar ho, toh skip kar do
    if (i === 5) {
    }

    document.write("<div style='text-align: center;'>");
    for (var j = 1; j <= i; j++) {
        document.write(" * ");
    }
    document.write("</div>");
}
