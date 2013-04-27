READ ME
=========

The survey manager service assists users (organizational staff members) in managing the processing of conducting exit surveys with employees (respondents) who have resigned or been terminated from the project. Users will be able to add respondents and track contacts made to respondents.
Resources that are part of the system include: 

- Users - a list of users of the system
- Respondents - a list of recently resigned staff who respond to survesy
- Contacts -a list contacts made by users to respondents

id attribute values:
-
- *users* - Applied to a div tag. A list of users
- *UID* - Applied to a FORM tag. A form for creating a user
- *respondents* -   Applied to a div tag. A a list of respondents
- *RID* - Applied to a FORM tag. A form for creating a respondent
- *contacts* -  Applied to a div tag. A list of contacts
- *contactID* - Applied to a FORM tag. A form used to add contacts

class attribute values:
-
- *user* - Applied to a LI tag. Represents a single user
- *respondent* - Applied to a LI tag. Represents a single respondent
- *contact* - Applied to a LI tag. A survey of a single respondent
- *create-user* -Applied to a FORM tag to add a new user.
 	- INPUT [text]=Uname
    - INPUT [text]=UID
    - INPUT [text]=email
    - INPUT [text]=jobtitle
- *update-user* - Applied to a FORM tag. An update to user. Should contain these elements:
    - INPUT [text]=Uname
    - INPUT [text]=UID
    - INPUT [text]=email
    - INPUT [text]=jobtitle
- *create-respondent* - Applied to a FORM tag. Adding a respondent should include these elements:
    - INPUT [text]=Rname
    - INPUT [text]=RID
    - INPUT [text]=Rphone
    - INPUT [text]=supervisor
- *update-respondent* - Applied to a FORM tag. An update to respondent should include these elements:
    - INPUT [text]=Rname
    - INPUT [text]=RID
    - INPUT [text]=Rphone
    - INPUT [text]=supervisor
- *create-contact* - Applied to a FORM tag. An update to respondent should include these elements:
    - INPUT [text]=contactdate
    - INPUT [text]=result
    - INPUT [text]=respondent
   
- *contactdate* - Applied to a SPAN tag. Contains the date-time a contact was made.       
- *respondentSearch* - Applied to a FORM tag. A link template to search all respondents.              
                                                                                                 - 

name attribute values:
-
- *name* - Applied to an INPUT [text] element. The full name of a user or respondent.
- *email* - Applied to an INPUT [email] element. The email address of a user.
- *jobtitle* - Applied to an INPUT [text] element. The Job Title of a user.
- *Rname* - Applied to an INPUT [text] element. The full name of a respondent.
- *RID* - Applied to an INPUT [text] element. The employee ID of a respondent. 
- *Phone* - Applied to an INPUT [tel] element. The phone # of a respondent.
- *hiredatetime* - Applied to an INPUT [date] element. The date respondent was hired
- *termdatetime* - Applied to an INPUT [date] element. The date a respondent resigned.
- *Supervisor* - Applied to an INPUT [text] element. The Supervisor of a respondent.

rel attribute values:
-
- *index* - Applied to A tag. A reference to starting URI for application
- *user* -  Applied to A tag. A reference to a user representation
- *userAdd* - Applied to A tag. A reference to userAdd FORM.
- *userUpdate* -  Applied to A tag. A reference to userUpdate FORM.
- *respondent* -  Applied to A tag. A reference to a respondent representation
- *respondentUpdate* - Applied to A tag. A reference to respondentUpdate FORM.
- *contact* - Applied to A tag. A reference to a contact representation
- *respondentSearch* - Applied to A tag. A reference to respondentSearch FORM.              

    
