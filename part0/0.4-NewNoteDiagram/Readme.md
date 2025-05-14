sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enters note text and clicks "Save"
    Browser->>Server: POST /new_note (form data)
    activate Server
    Server-->>Browser: HTTP 302 Redirect to /notes
    deactivate Server
    Browser->>Server: GET /notes
    activate Server
    Server-->>Browser: HTML page with notes
    deactivate Server
    Browser->>Server: GET /main.js
    Server-->>Browser: JavaScript file
    Browser->>Server: GET /data.json
    Server-->>Browser: JSON of existing notes (including new one)
    Browser-->>User: Render updated note list on page
