# __NOT PRODUCTION__ READY DO NOT USE.
# PortSoc Roles.
A nice and simple role bot, it's designed to parse a CSV database and apply the specified roles
to students in a given discord server.

## User Databse:
To be supplied as a CSV file in the following format:
1. Student ID (UP Number)
2. Student Name 
3. Course 
4. Registration status


## Commands:
### /upload

#### Description:
**__OVERWRITES__** the current CSV database, that's being used to give new users their roles.

#### Arguments: 
* **File**
  * **Description**: The CSV File you intend to overwrite, it must follow the format described in the section below.
  * **Type**: Attachment
  
### /associate:

#### Description:
Associate a certain course, with a given discord role.

#### Arguments:
* **Course Name**
  * **Description**: The code name of the course, as would be found in the database. (case sensitive)
  * **Type**: String
* **Role**
  * **Description**: The discord role that'll be applied to them when the course name is present in the database..
  * **Type**: Role

### /disassociate:

#### Description:
Disassociate a role with a certain course.

#### Arguments:
* **Course Name**
  * **Description**: The code name of the course, as would be found in the database. (case sensitive)
  * **Type**: String
* **Role**
  * **Description**: The role to disassociate.
  * **Type**: Role

### /validate_roles:
__**DANGEROUS**__
#### Description:
Validates the roles of a given user.

**WILL REMOVE ASSOCIATED ROLES THE USER DOES NOT CURRENTLY HAVE IN THE DATABASE**

#### Arguments:
* **Course Name**
  * **Description**: The user you want to validate the roles of
  * **Type**: User