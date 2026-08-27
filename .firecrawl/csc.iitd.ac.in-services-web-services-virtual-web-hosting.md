- [ERP](https://eadmin.iitd.ac.in/)
- [How To](https://csc.iitd.ac.in/howto)
- [Networking](https://csc.iitd.ac.in/services-network)
- [Web Services](https://csc.iitd.ac.in/services-web-services)
- [Software](https://csc.iitd.ac.in/services-software)
- [Baadal](https://baadal.iitd.ac.in/baadal)
- [HPC](https://supercomputing.iitd.ac.in/)
- [IITD Website](https://home.iitd.ac.in/)
- Email
- [Labs Booking](https://labbookings.csc.iitd.ac.in/)

[![Logo](https://csc.iitd.ac.in/static/media/logo.f07b5b0154ad5083bea6.png)](https://csc.iitd.ac.in/)

- [Services](https://csc.iitd.ac.in/services)
  - [Software](https://csc.iitd.ac.in/services-software)
  - [Network](https://csc.iitd.ac.in/services-network)
  - [Web Services](https://csc.iitd.ac.in/services-web-services)
  - [CSC Labs Booking](https://labbookings.csc.iitd.ac.in/)
  - [User Admin & Infra](https://csc.iitd.ac.in/services-user-admin-infra)
  - [HPC](https://supercomputing.iitd.ac.in/)
  - [Cloud Computing](https://baadal.iitd.ac.in/baadal)
  - [ERP](https://csc.iitd.ac.in/services-erp)
- [People](https://csc.iitd.ac.in/people)
  - [Academic](https://csc.iitd.ac.in/academic)
  - Non-academic
    - [Technical Staff](https://csc.iitd.ac.in/technical-staff)
    - [Non-Technical Staff](https://csc.iitd.ac.in/non-technical-staff)
  - [Former Heads](https://csc.iitd.ac.in/former-heads)
  - Former Employees
    - [Academic](https://csc.iitd.ac.in/ex-academic)
    - [Non-academic](https://csc.iitd.ac.in/ex-non-academic)
- [Quick Access](https://csc.iitd.ac.in/services-web-services-virtual-web-hosting#)
  - ["How To?" Zone](https://csc.iitd.ac.in/howto)
  - [Getting Started](https://csc.iitd.ac.in/getting-started)
  - [Healthgraphs (MRTG)](http://healthgraphs.iitd.ac.in/mrtg/)
- [Careers](https://csc.iitd.ac.in/careers)
- [Contact](https://csc.iitd.ac.in/contact)
  - Logout

### Virtual Web Hosting

The CSC has commissioned a new virtual web hosting facility for securely hosting all web sites of the form https://xyz.iitd.ac.in which are not maintained by CSC. Each such web site will be securely maintained as a virtual site on the same server.

**Services available:**

- Apache web server, with PHP8.2 and MySQL.
- Enforced HTTPS functionality.
- Access to up to 2 MySQL databases.
- Shell access to the web-server.

**Steps for getting a web domain of the form xyz.iitd.ac.in are as follows:**

1. The faculty-in-charge needs to file a request to **webgroup@cc.iitd.ac.in**, using IIT Delhi email, with the details of:
   - The required domain name (of the format specified above)
   - Faculty contact (full email address).
   - The purpose of the web-site
   - Database access, whether required
   - List of people (with LDAP usernames) who will have edit-access to this web site
2. On receiving the request from the faculty member, CSC web team will review it manually; and create the appropriate pointers in DNS, certificate generation (for SSL requirements, if any), database account creation, and other required steps. Please note that the request cannot be processed if it is sent by a non-faculty (even if the faculty member is in "cc")
3. The faculty member will be notified once the process is over, which typically should not take more than 3 working days. The database credentials will have to be collected in person from the Web team, Computer Services Center.

**User guide:**

If you are creating a brand new web site (for example, xyz.iitd.ac.in):

- Login to the server xyz.iitd.ac.in using your favorite SSH client. (openssh-client and Putty are few commonly used clients for Linux and Windows respectively).NOTE: Files can also be trasferred to the html directory using scp clients such as [WinSCP](https://winscp.net/eng/index.php) or Filezilla
- - Change the directory to /var/www/xyz, and you can find a directory tree of the form:

      ```
      xyz/
              |-- apache-logs
              |   |-- access.log
              |   |-- error.log
              |   `-- ssl_access.log
              |-- https
              |   |-- cgi-bin
              |   `-- html
              |       `-- index.html
              `-- README

      ```

  - All the access log for the domain xyz.iitd.ac.in are available in the directoryapache-logs.
  - The directoryhttpcontains the files which will be served throughhttps://xyz.iitd.ac.in/. The cgi-scripts can be placed in the directorycgi-bin, which can be accessed using https://xyz.iitd.ac.in/cgi-bin.
  - The directory https contains the files which will be served through https://xyz.iitd.ac.in/ . The cgi-scripts can be placed in the directory cgi-bin, which can be accessed using https://xyz.iitd.ac.in/cgi-bin.
  - All the users delegated to edit the xyz.iitd.ac.in will be able to edit the contents of these directories by default. To make sure the web site is functional, all **the files created should be accessible to the group, i.e. _xyz_, with read/write privileges. If files are created by a user, the group should be set correctly.**

* * *

#### [USER WEB PAGES](https://csc.iitd.ac.in/services-user-admin-user-web-pages)

The CSC has commissioned a server _web.iitd.ac.in_ for hosting web pages of all faculty and PhD students. Your pages will become visible both internally, and externally with a url https://web.iitd.ac.in/~userid where userid is your LDAP id (user id). [Read more...](https://csc.iitd.ac.in/services-user-admin-user-web-pages)

##### Edit

Address

Phone

Email

Save Changes

![](https://csc.iitd.ac.in/static/media/logo.f07b5b0154ad5083bea6.png)

###### Contact Us

- Main Building, IIT Delhi
- 011-2659-7220
- Click to reveal email

© Copyright 2026, Computer Services Centre, IIT Delhi

Developed & Maintained by: [CSC, IIT Delhi](http://csc.iitd.ac.in/)