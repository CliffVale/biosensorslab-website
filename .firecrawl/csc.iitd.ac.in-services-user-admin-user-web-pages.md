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
- [Quick Access](https://csc.iitd.ac.in/services-user-admin-user-web-pages#)
  - ["How To?" Zone](https://csc.iitd.ac.in/howto)
  - [Getting Started](https://csc.iitd.ac.in/getting-started)
  - [Healthgraphs (MRTG)](http://healthgraphs.iitd.ac.in/mrtg/)
- [Careers](https://csc.iitd.ac.in/careers)
- [Contact](https://csc.iitd.ac.in/contact)
  - Logout

### User web pages

The CSC has commissioned a server _web.iitd.ac.in_ for hosting web pages of all faculty and PhD students.Your pages will become visible both internally, and externally with a url http://web.iitd.ac.in/~userid where userid is your LDAP id (email id).

To facilitate limited access from only within IITD, CSC has commissioned a separate web server _privateweb.iitd.ac.in_, where all users of IITD can have their personal web pages. Users can create their web pages in a directory/folder called private\_html under their CSC homefolder. These web pages can then be accessed from within IITD through the URL http://privateweb.iitd.ac.in/~userid.

Some of the features of the new web-page hosting servers are as follows:

1. No separate account for creating user web pages will be necessary. All faculty and PhD students can maintain their personal web pages in a directory called _public\_html_ in their CSC home folder. The web pages are accessible as http://web.iitd.ac.in/~userid.
2. All users can maintain their private (accessible from within IITD) web pages in a directory called _private\_html_ in their CSC home folder. The web pagesare accessible as http://privateweb.iitd.ac.in/~userid.
3. The CSC home folder for all users are mounted as the default home folders on all Windows and Linux machines in the CSC. Users can install and modify their web-pages from any CSC desktop.
4. The CSC home folders are also available on the publicly accessible ssh servers _ssh1.iitd.ac.in_(for all users including faculty) and _ssh2.iitd.ac.in_(for faculty only).Home directory can be access from _ssh1.iitd.ac.in_ and _ssh2.iitd.ac.in_(faculty only) by usingsecure shell client (ssh client). ssh clientis available by default on all versions of Unices, Linux and Mac. Windows users can download and install a popular ssh client called [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/) and a popular GUI secure copyclient called [WinScp](http://winscp.net/eng/index.php).
5. The CSC home folders can also be mounted by users (after authentication) as local folders on any Windows, Mac or Linux desktops/laptops connected to the IITD LAN. Using this, the users can install/edit their web-pages from their own machines also. Please see the CSC page on [Home spaces through CIFS shares](https://csc.iitd.ac.in/services-network-home-spaces-cifs.php) for details.
6. Users can link their own [php](http://en.wikipedia.org/wiki/PHP) and [cg](http://en.wikipedia.org/wiki/Common_Gateway_Interface) i scripts to their web-pages and these will execute under userprivileges and permissions. Hence one user's files and data will be completely protected from another user, as long as the file permissions are set up suitably. Please see below for the recommended permission settings.

Login to_ssh1.iitd.ac.in_using a ssh client (or an sftp client) and set the**recommended file permissions**as follows:

1. For any static web content (all non-executable files, like static HTML pages, Images, JavaScript, CSS files, etc), the corresponding file should be set to world readable (preferably 644), and all the parent directories (including the $HOME) should have the execute bit set for the world (preferably 701).
2. For any executable (PHP or CGI scripts), as well as configuration files which are to be read only by such executables, nobody other than the owner should be given read permissions. It is also required to set executable bit for the owner, to allow executing it as a script with the owner's ID. The permissions thus become 700 for such files (if write access has to be granted), or 500 (for read only).
3. The bare minimum to get started is:ssh to _ssh1.iitd.ac.in_ or _ssh2.iitd.ac.in_ and use the following:

```
chmod o+x $HOME
chmod uo+x $HOME/public_html
cd $HOME/public_html && chmod -R u+rx *.php *.cgi
```


_n.b._ Please ensure that all html files have read access by all and all php and cgi scripts have the executable permissions set. Please note that there is no web based user interface to manage the website.

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