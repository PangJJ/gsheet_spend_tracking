# Log-Track-Store-Analyze spends on GSheet

---

## Motivation
My memory is pretty horrendous, but I want to achieve the following:
- retrospectively analyse my spendings, if i have been consistently/increasingly overspending on any particular areas
- answer the age old question: where did my money go ?

### Context
* Minimal setup (mainy FE) for my personal restrospective analysis of my own spending habits.
* Data privately stored, with minimal cost
* My spending habits / avenues are pretty basic. Hence this entire setup is similarly basic.
---


## Setup

#### > GSheet template
1. clone the the [GSheet](https://docs.google.com/spreadsheets/d/1lLzVoR2fmq3RsRlkZzXm26-3SsOHjARyCg-c4RMzjQE/edit?usp=sharing) with the presets setup into your own drive/folder etc


#### > App script
2. Attach an AppsScript to the cloned GSheet above
3. copy the code in `src/main.gs` into the AppsScript (please please please **READ** the code, and use it at your own risk. It was setup for my personal usage and flow only)
4. Go back to the spreadsheet, press the "INSERT" button, you **WILL** need to authorize the script to run in your account with the relevant permissions for on the Gsheet


* _note: if you already have AppsScript setup, and already have a function called `insertData`, you might want to rename the function in `src/main.gs`, and modify the function called by the code and the `INSERT` button._


#### > config
5. located in the `config` tab, add/edit your desired categories to show in the `category` data.


---
## Usage

##### > Mobile
* [Optional] Make a Gsheet shortcut on your homescreen
* Open the GSheet, fill in - the blanks (`category`, `spend`, `sub-category`, `details`) in `D2:D5`.
* Select the text box on `A5`, the script should trigger, insert the data into the `data` tab, and clear the checkbox.
  * _mobile gsheet is unable to detect button clicks, hence I used a checkbox here for workaround_


##### > Web
* Open the GSheet, fill in - the blanks (`category`, `spend`, `sub-category`, `details`) in `D2:D5`.
* Click on the insert button to see your text populate in the spreadsheet under `data` tab

---
## Analysis

* `analysis` tab -- or the various graph tabs in the Gsheet. These couple of SQL statements used in the template are sufficient for my own use, they aggregate data in a dimensions that I am concern about
* `data` tab -- there are filters above to zoom into a specific set of data
