+-------------------+                             +-----------------------------+
|   User's Browser  |                             |          Server             |
+-------------------+                             +-----------------------------+
          |                                                   |
          | 1. HTTP GET /exampleapp/spa                       |
          |--------------------------------------------------->|
          |                                                   |
          |           2. Respond with spa.html                |
          |<---------------------------------------------------|
          |                                                   |
          | 3. Parse HTML → Send requests for JS files        |
          |--------------------------------------------------->|
          |    GET /main.js                                   |
          |    GET /data.js                                   |
          |                                                   |
          |        4. Server responds with JS files           |
          |<---------------------------------------------------|
          |                                                   |
          | 5. JS executed: Fetch notes from backend via AJAX |
          |--------------------------------------------------->|
          |    GET /notes.json (XHR/Fetch)                    |
          |                                                   |
          |        6. JSON response with note data            |
          |<---------------------------------------------------|
          |                                                   |
          | 7. JS dynamically updates DOM with notes          |
          |                                                   |
          |----> All future interaction handled by JS <--------|
          |----> No page reloads (SPA behavior) <-------------|
