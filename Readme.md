READ ME
=========

The survey manager service assists users (organizational staff members) in managing the process of conducting exit surveys with employees (respondents) who have resigned or been terminated from the project. Users will be able to view the list of respondents, add and update respondents. They will also be able to add contacts made to respondents and view a list of all contacts.
Resources that are part of the system include: 

- Users - a list of users of the system
- Respondents - a list of recently resigned staff who respond to survesy
- Contacts -a list contacts made by users to respondents

id attribute values:
-
- *users* - Applied to a div tag. A list of users
- *ID* - Applied to a FORM tag. A form for creating a user. The ID is an input of employee on form.
- *respondents* -   Applied to a div tag. A a list of respondents
- *RID* - Applied to a FORM tag. A form for creating a respondent
- *contacts* -  Applied to a div tag. A list of contacts
- *contactID* - Applied to a FORM tag. A form used to add contacts

class attribute values:
-
- *user* - Applied to a LI tag. Represents a single user
- *respondent* - Applied to a LI tag. Represents a single respondent
- *contact* - Applied to a LI tag. A survey of a single respondent
- *create-user* -Applied to a FORM tag to add or update a new user.
 	- INPUT [text]=name user's name
    - INPUT [text]=ID user's employee id
    - INPUT [text]=email
    - INPUT [text]=jobtitle
- *create-respondent* - Applied to a FORM tag. Adding a respondent should include these elements:
    - INPUT [text]=name to indicate the respondent's name
    - INPUT [text]=ID created automatically 
    - INPUT [text]=phone respondent's telephone number
    - INPUT [text]=supname respondent's supervisor name
- *update-respondent* - Applied to a FORM tag. An update to respondent should include these elements:
    - INPUT [text]=Rname
    - INPUT [text]=RID
    - INPUT [text]=Rphone
    - INPUT [text]=supervisor
- *create-contact* - Applied to a FORM tag. An update to respondent should include these elements:
    - INPUT [text]=contactdate
    - INPUT [text]=result
    - INPUT [text]=respondent
         
- *respondentSearch* - Applied to a FORM tag. A link template to search all respondents.              
                                                                                                 - 

name attribute values:
-
- *name* - Applied to an INPUT [text] element. The full name of a user or respondent.
- *email* - Applied to an INPUT [email] element. The email address of a user.
- *jobtitle* - Applied to an INPUT [text] element. The Job Title of a user.
- *ID* - Applied to an INPUT [text] element. The id of a user or a repondent.
- *Phone* - Applied to an INPUT [tel] element. The phone # of a respondent.
- *hiredatetime* - Applied to an INPUT [date] element. The date respondent was hired
- *termdatetime* - Applied to an INPUT [date] element. The date a respondent resigned.
- *Supervisor* - Applied to an INPUT [text] element. The Supervisor of a respondent.

rel attribute values:
-
- *index* - Applied to A tag. A reference to starting URI for application
- *user* -  Applied to A tag. A reference to a user representation
- *create-user* - Applied to A tag. A reference to create-user FORM.
- *respondent* -  Applied to A tag. A reference to a respondent representation
- *create-respondent* - Applied to A tag. A reference to create-respondent FORM.
- *contact* - Applied to A tag. A reference to a contact representation
- *create-contact* - Applied to A tag. A reference to create-contact FORM.      
