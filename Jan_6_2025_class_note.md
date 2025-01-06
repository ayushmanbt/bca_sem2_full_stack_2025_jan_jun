# Class notes for 6th January 2025

- **Introduction** Your input on what is full stack development? Elements of full stack. Some answers received from you -
    - HTML, CSS, JavaScript (JS)
    - Node.js
    - Frontend and Backend
    - applications
    - websites
- Main two parts of full stack -
    - frontend: the part we see - made using HTML,CSS,JS
    - Backend: The part which serves everything - HTML, CSS, JS, Images, Videos also handles backend logic like authentication, databases
- HTML Hyper Text Markup Language used to declare the structure of the webpage
- CSS Cascading Style Sheet - Makes the layout look better with organization
- Javascript - Brings in functionality and logic in webpage
- How websites work
    - **What is URL** - Uniform Resource Locator. Example: https://www.google.com/hello?q=a
        - **https** the protocol used for communication. There are other protocols like ftp, ssh etc. https stands for hyper text transmission protocol secure. This is the default over http from early 2010s
        - **www** stands for world wide web. here it is the subdomain 
        - **google.com** is the second level domain 
        - **.com** is the top level domain
        - **www.google.com** is the host/domain
        - **/hello** is the path of the resource being accessed
        - **?q=a** is a query string where _q_ is the query and _a_ is the value being queried. 
        > Quick exercise, try to search anything on google and see how the search term is in the query string.
    - **IP Address** - Internet Protocol Address - Unique numbers used to identify any system connected to the internet
        - There are two types of IP addresses currently being used -
            - **IPv4** - total availble v4 address - 4 billion - this is a problem cause there are numerous computers, servers reaching the count of billions. 
            - **IPv6** - 2^128 - probably will never run out
    - **DNS** - Domain Name System - It is like the address book of the internet and maps URLs to IP addresses, So that we can remember familiar looking domain names rather than random numbers. Also helps with scenarois where the IP gets changed somehow.
    - Once you enter the URL in your browser, your computer asks the preconfigured DNS for the IP of that URL. Then the actual request for the webpage is made to the computer associated with that IP Address. This computer which recieved the request for the resources in the end is the backend.

Here is a detailed diagram of how this works -

```
+-----------------------+
|   User's Browser      | <-- User types "www.google.com"
+-----------------------+
          |
          v
+-----------------------+
| DNS Resolver (Local)  | <-- Looks up the DNS cache first
+-----------------------+
          |
    Cache Hit? No
          |
          v
+-----------------------+
| Root DNS Server       | <-- Queries the Root DNS Server for TLD (".com")
+-----------------------+
          |
          v
+-----------------------+
| TLD DNS Server (.com) | <-- Queries the TLD DNS Server for google.com
+-----------------------+
          |
          v
+-----------------------+
| Authoritative DNS     | <-- Queries the Authoritative DNS Server for google.com
| Server for google.com | <-- Returns IP address of "www.google.com"
+-----------------------+
          |
          v
+-----------------------+
| DNS Resolver (Local)  | <-- Caches the IP address
+-----------------------+
          |
          v
+-----------------------+
| User's Browser        | <-- Makes HTTP(S) request to the server using the IP
+-----------------------+
          |
          v
+-----------------------+
| Google Web Server     | <-- Returns the requested website data
+-----------------------+
          |
          v
+-----------------------+
| User's Browser        | <-- Displays the website
+-----------------------+

```

(This is a very detailed diagram, if you can remember all this details then good, however its not required for exams)
- Discussed how the grading criteria works. Ask your peers about it if you were not in the class. 

## Things to probably look for in next class

HTML tags