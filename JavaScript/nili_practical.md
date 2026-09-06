Absolutely. The previous roadmap was more theory-oriented. For practical learning, we should do it like a **lab manual**: open LibreOffice Calc → enter exactly this data → click these menus → verify this result → then move to the next exercise.

I’ll structure it **chapter-wise**, based on Unit 2, and we’ll build small practical exercises rather than trying to reproduce the textbook blindly.

# LibreOffice Calc — Unit 2 Practical Learning Plan

We'll learn in this order:

| Chapter | Topic                 | Practical Project     |
| ------- | --------------------- | --------------------- |
| 4       | Analyse Data          | Sales Analysis        |
| 5       | Macros                | Automated Formatting  |
| 6       | Link Spreadsheet Data | Student Result System |
| 7       | Share & Review        | Team Result Review    |

**Important:** Don't move to the next chapter until you can complete the current practical without looking at the steps.

---

# Chapter 4 — Analyse Data

We will learn:

1. Consolidating data
2. Subtotals
3. What-if Analysis
4. Scenarios
5. Goal Seek

We'll start with **Consolidation**.

---

# Practical 1 — Consolidate Data

## Objective

Suppose a company has sales from two branches:

```text
Pune Branch
Mumbai Branch
```

We want one consolidated report.

---

## Step 1 — Open Calc

Open:

**LibreOffice Calc**

Create a new spreadsheet.

At the bottom you should see something like:

```text
Sheet1
```

Rename it:

```text
Pune
```

To rename:

**Right-click Sheet1 → Rename Sheet → Pune**

---

# Step 2 — Enter Pune data

In the Pune sheet enter:

| A       | B   | C   | D   |
| ------- | --- | --- | --- |
| Product | Jan | Feb | Mar |
| Laptop  | 20  | 25  | 30  |
| Mobile  | 40  | 50  | 60  |
| Tablet  | 15  | 20  | 25  |

So your sheet should look like:

```text
       A          B      C      D
1   Product      Jan    Feb    Mar
2   Laptop       20     25     30
3   Mobile       40     50     60
4   Tablet       15     20     25
```

---

# Step 3 — Create Mumbai sheet

At the bottom:

**Click +**

Rename the new sheet:

```text
Mumbai
```

Enter:

| Product | Jan | Feb | Mar |
| ------- | --: | --: | --: |
| Laptop  |  30 |  35 |  40 |
| Mobile  |  50 |  60 |  70 |
| Tablet  |  25 |  30 |  35 |

---

# Step 4 — Create Consolidated sheet

Click **+** again.

Rename:

```text
Consolidated
```

You should now have:

```text
Pune | Mumbai | Consolidated
```

---

# Step 5 — Open Consolidate

Select cell:

```text
A1
```

Then go to:

**Data → Consolidate**

A dialog box should open.

Don't worry if your LibreOffice version looks slightly different.

---

# Step 6 — Select the first range

In the **Source data ranges** box, enter/select:

```text
Pune.A1:D4
```

Or click the range-selection button and select:

```text
Pune!A1:D4
```

depending on your Calc version.

Click:

**Add**

You should now see the Pune range added to the list.

---

# Step 7 — Add Mumbai

Select:

```text
Mumbai.A1:D4
```

Click:

**Add**

Now your source list should contain both ranges.

Conceptually:

```text
Pune.A1:D4
Mumbai.A1:D4
```

---

# Step 8 — Select function

Look for:

**Function**

Select:

```text
Sum
```

We want:

```text
Pune Sales + Mumbai Sales
```

---

# Step 9 — Select labels

Look for options such as:

```text
Top row
Left column
```

Enable both.

Why?

Because Calc needs to understand:

```text
Top row → Jan / Feb / Mar
Left column → Laptop / Mobile / Tablet
```

---

# Step 10 — Select destination

For the target range, select:

```text
Consolidated.A1
```

Then click:

**OK**

---

# Step 11 — Check your result

You should get approximately:

| Product | Jan | Feb | Mar |
| ------- | --: | --: | --: |
| Laptop  |  50 |  60 |  70 |
| Mobile  |  90 | 110 | 130 |
| Tablet  |  40 |  50 |  60 |

### Stop here.

Don't continue until you can reproduce this.

---

# 🚨 Common Consolidate Problems

### Problem 1 — I don't get Product names

Usually you didn't select:

```text
Left column
```

---

### Problem 2 — Jan/Feb/Mar aren't appearing correctly

Check:

```text
Top row
```

---

### Problem 3 — I get duplicated products

Make sure the product names are **exactly the same**:

```text
Laptop
Laptop
```

not:

```text
Laptop
laptop
```

or:

```text
Laptop 
```

with an extra space.

---

# Practical 2 — Consolidate with 3 Branches

Now repeat the same exercise with:

```text
Pune
Mumbai
Delhi
```

Don't look at the previous steps if possible.

This is your first test.

---

# Practical 3 — What-if Analysis

Now we'll move to the next concept.

Create a new sheet:

```text
Profit Analysis
```

Enter:

| Cell | Value             |
| ---- | ----------------- |
| A1   | Profit Calculator |
| A2   | Selling Price     |
| A3   | Cost Price        |
| A4   | Quantity          |
| A5   | Total Revenue     |
| A6   | Total Cost        |
| A7   | Profit            |

Enter:

```text
B2 = 100
B3 = 60
B4 = 100
```

---

## Step 1 — Revenue

In B5:

```text
=B2*B4
```

You should get:

```text
10000
```

---

## Step 2 — Cost

In B6:

```text
=B3*B4
```

Result:

```text
6000
```

---

## Step 3 — Profit

In B7:

```text
=B5-B6
```

Result:

```text
4000
```

Now we have:

```text
Selling Price = 100
Cost = 60
Quantity = 100

Profit = 4000
```

---

# Practical 4 — Scenario

Now imagine:

### Scenario 1

```text
Selling Price = 100
Cost Price = 60
Quantity = 100
```

### Scenario 2

```text
Selling Price = 120
Cost Price = 60
Quantity = 100
```

### Scenario 3

```text
Selling Price = 150
Cost Price = 70
Quantity = 100
```

Instead of manually changing B2/B3/B4, create scenarios.

---

## Step 1

Select:

```text
B2:B4
```

---

## Step 2

Go to:

**Tools → Scenarios**

Depending on your LibreOffice version, the exact menu placement/name may vary slightly.

---

## Step 3

Give it a name:

```text
Normal Sales
```

Create it.

Then create:

```text
High Sales
```

and:

```text
Premium Sales
```

---

## Step 4 — Test

Switch between scenarios.

Watch:

```text
Profit
```

change automatically.

### Key learning

You're learning:

```text
Same formula
+
Different input values
=
Different business outcome
```

---

# Practical 5 — Goal Seek

This is one of the most useful exercises.

Create:

| Student  | Marks |
| -------- | ----: |
| English  |    70 |
| Maths    |    65 |
| Science  |    75 |
| Hindi    |    80 |
| Computer |     ? |

Suppose the student wants:

```text
Average = 75
```

We want Calc to tell us:

> What marks are required in Computer?

---

# Step 1 — Enter data

```text
A1 = Subject
B1 = Marks

A2 = English
B2 = 70

A3 = Maths
B3 = 65

A4 = Science
B4 = 75

A5 = Hindi
B5 = 80

A6 = Computer
B6 = 0
```

---

# Step 2 — Calculate average

In:

```text
B7
```

enter:

```text
=AVERAGE(B2:B6)
```

---

# Step 3 — Goal Seek

Select:

```text
B7
```

Go to:

**Tools → Goal Seek**

You'll get three important fields:

```text
Formula cell
Target value
Variable cell
```

Enter:

```text
Formula cell:
B7

Target value:
75

Variable cell:
B6
```

Click:

**OK**

Calc will calculate the required Computer marks.

---

# 🧠 Remember Goal Seek like this

```text
Normal formula:

Input → Formula → Output

Goal Seek:

???????? → Formula → Desired Output
```

For example:

```text
Computer marks → Average → 75
      ↑
   Goal Seek
```

---

# Chapter 5 — Macros

Now we'll learn automation.

Don't start with complicated macros.

We'll make a simple one.

---

# Practical 6 — Record a Formatting Macro

Create a new spreadsheet.

Enter:

```text
A1 = Monthly Sales Report
```

We want our macro to automatically:

```text
Bold
Center
Increase font size
```

---

# Step 1 — Enable macro recording

Go to:

**Tools → Macros**

Look for:

**Record Macro**

If you don't see it, tell me your LibreOffice version/screenshot because the setting can differ.

---

# Step 2 — Start recording

Click:

**Record Macro**

Now Calc is watching what you do.

---

# Step 3 — Format the heading

Select A1.

Apply:

```text
Bold
Font size = 16
Center
```

---

# Step 4 — Stop recording

Click:

**Stop Recording**

LibreOffice will ask you where to save it.

Create:

```text
My Macros
   ↓
Standard
   ↓
Module1
```

Name:

```text
FormatHeading
```

---

# Step 5 — Test

Create another sheet.

Enter:

```text
A1 = Employee Report
```

Now run:

**Tools → Macros → Run Macro**

Select:

```text
FormatHeading
```

Click:

**Run**

Your Employee Report should receive the formatting automatically.

---

# 🎯 What you just learned

You didn't write code.

You did:

```text
Perform actions
       ↓
Record
       ↓
Save Macro
       ↓
Run Macro
       ↓
Actions repeat
```

That's the fundamental Macro concept.

---

# Chapter 6 — Linking Spreadsheet Data

Now we'll build something more realistic.

Create a workbook with:

```text
Term1
Term2
FinalResult
```

---

# Practical 7 — Link Two Sheets

## Term1

Enter:

| Student | Maths | Science |
| ------- | ----: | ------: |
| Rahul   |    80 |      75 |
| Priya   |    90 |      85 |
| Amit    |    70 |      80 |

---

## Term2

Enter:

| Student | Maths | Science |
| ------- | ----: | ------: |
| Rahul   |    85 |      80 |
| Priya   |    95 |      90 |
| Amit    |    75 |      85 |

---

# FinalResult

Create:

| Student | Maths | Science |
| ------- | ----: | ------: |
| Rahul   |       |         |
| Priya   |       |         |
| Amit    |       |         |

We want:

```text
Final Maths =
(Term1 Maths + Term2 Maths) / 2
```

---

# Step 1 — Link Rahul's Maths

Go to:

```text
FinalResult.B2
```

Type:

```text
=
```

Now click:

```text
Term1
```

Click Rahul's Maths cell.

Type:

```text
+
```

Go to:

```text
Term2
```

Click Rahul's Maths cell.

Then:

```text
/2
```

Press Enter.

Calc creates the sheet reference for you.

This is actually easier and safer than manually typing the syntax.

---

# Step 2 — Copy the formula

Drag the fill handle down.

Calc should calculate:

```text
Rahul = 82.5
Priya = 92.5
Amit = 72.5
```

---

# Step 3 — Test the link

Change Rahul's Term1 Maths:

```text
80 → 100
```

Go to FinalResult.

The result should automatically change.

### This is the important part.

You've created a **live link**.

---

# Practical 8 — Link External Spreadsheet

Now create:

```text
Term1.ods
Term2.ods
FinalResult.ods
```

Don't put everything in one file.

Now practice linking:

```text
Term1.ods
      ↓
FinalResult.ods
```

and:

```text
Term2.ods
      ↓
FinalResult.ods
```

The easiest way to learn this is **not to manually type the external reference**.

Instead:

1. Open both files.
2. In FinalResult type `=`.
3. Switch to Term1.
4. Click the required cell.
5. Return to FinalResult.
6. Complete the formula.
7. Press Enter.

Calc will construct the external reference.

---

# Practical 9 — Hyperlinks

Create:

```text
A1 = Go to Final Result
```

Select A1.

Go to:

**Insert → Hyperlink**

Create a link to:

```text
FinalResult.ods
```

Now click the hyperlink.

You should be taken to the target.

---

# Practical 10 — Import Web Table

This one can be tricky because LibreOffice versions and websites behave differently.

For learning:

1. Find a webpage containing an HTML table.
2. Copy the table URL.
3. In Calc look for the external-data/table import option.
4. Enter the URL.
5. Let Calc detect available tables.
6. Select the required table.
7. Import it.

**Important:** Modern websites often use JavaScript-rendered tables, which may not import cleanly into Calc. If the textbook's example doesn't work today, that's not necessarily your mistake.

If this is where you are currently getting stuck, send me a screenshot and I'll troubleshoot the exact screen you're seeing.

---

# Chapter 7 — Sharing & Reviewing

Now create:

```text
Student_Result.ods
```

with:

| Roll No | Name  | Marks |
| ------: | ----- | ----: |
|       1 | Rahul |    80 |
|       2 | Priya |    85 |
|       3 | Amit  |    90 |

---

# Practical 11 — Track Changes

Go to:

**Edit → Track Changes → Record**

Now change:

```text
Rahul → Rohan
```

or:

```text
80 → 85
```

Calc records the modification.

---

# Practical 12 — Add Comment

Select a cell.

Go to:

**Insert → Comment**

Enter:

```text
Marks verified by teacher.
```

You now have a comment attached to the cell.

---

# Practical 13 — Review Changes

Go to:

**Edit → Track Changes → Manage**

You should be able to see changes.

For each change you can decide:

```text
Accept
Reject
```

You can also accept/reject all changes.

---

# 🧪 Your Complete Practical Assignment

Once you've finished the individual exercises, don't read the steps.

Try building this yourself:

## Employee Salary Analysis

Create:

```text
Salary_Analysis.ods
```

with sheets:

```text
January
February
March
Consolidated
Analysis
Report
```

### January

| Employee | Basic | Allowance |
| -------- | ----: | --------: |
| A        | 30000 |      5000 |
| B        | 40000 |      7000 |
| C        | 35000 |      6000 |

Do the same for February and March.

Then:

### 1. Consolidate

Combine the three months.

### 2. Analysis

Calculate:

```text
SUM
AVERAGE
MAX
MIN
```

### 3. Goal Seek

Question:

> What Basic Salary is required to achieve a Gross Salary of ₹50,000?

### 4. Scenario

Create:

```text
Normal
High Allowance
Low Allowance
```

### 5. Macro

Create a macro:

```text
FormatSalaryReport
```

that formats the report heading.

### 6. Linking

Create a separate:

```text
Annual_Report.ods
```

and link the consolidated data.

### 7. Comments

Add:

```text
Salary verified.
```

### 8. Track Changes

Modify an employee's allowance and review the change.

---

# How I suggest we learn this with you

Since you said you were **actually getting stuck while doing the practical**, I don't want to dump all the remaining steps on you at once.

Let's do it like a **hands-on training session**:

### Lesson 1

**Consolidate**

I'll give you the exact data → you perform it in Calc → if you get an error, **send me a screenshot of your Calc screen** → I'll tell you exactly what to click/change.

Then we'll do:

```text
Lesson 1 → Consolidate
        ↓
Lesson 2 → Subtotals
        ↓
Lesson 3 → Scenarios
        ↓
Lesson 4 → What-if Analysis
        ↓
Lesson 5 → Goal Seek
        ↓
Lesson 6 → Macros
        ↓
Lesson 7 → Linking Sheets
        ↓
Lesson 8 → Linking Files
        ↓
Lesson 9 → Hyperlinks / External Data
        ↓
Lesson 10 → Sharing
        ↓
Lesson 11 → Track Changes
        ↓
Lesson 12 → Comments + Review
        ↓
Final Project
```

**Start with Lesson 1: Consolidate.** Open Calc, create the **Pune** and **Mumbai** sheets with the exact data above, and try the Consolidate operation. If you get stuck at **any screen/dialog**, send me a screenshot—I can walk you through that exact step rather than making you guess.
