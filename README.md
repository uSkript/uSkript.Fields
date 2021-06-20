# uSkript Fields

|Package|uSkript.Fields v1.0.0
|-----------------|-----------------
|Umbraco|v8.14.0

---

### Description:
This package provides a set of standard properties with some additional options, such as setting a default value and read only.

---

### Usage:
- Add pre-set default values in your properties when you create them under the "Settings" section
- Toggle the "Read Only" option to prevent content editors from changing the values
- For Boolean properties, set the validation to mandatory to force the content editors to keep it checked (Will be improved in future versions)

---

### Available Properties and Options:

With more properties and options to be added in the future, the package currently contains:

|Property|Set Default Value|Set Read Only
|-----------------|-----------------|-----------------
|Text String|Yes|Yes
|Textarea|Yes|Yes
|Boolean|Yes (True/Checked)|Use The default Umbraco validation (mandatory to force editors to keep it checked)

---

### Preview:
![Preview](https://raw.githubusercontent.com/uSkript/uSkript.Fields/Master/App_Plugins/uSkript.Fields/img/uskript.fields.preview.png)