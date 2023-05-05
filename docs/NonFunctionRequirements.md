## Introduction

Non-Functional Requirements describe the constraints upon the system and software by identifying:
1. the system's environmental circumstances,
2. the attributes the system must possess
3. all other constraints relevant to the system's development and implementation.

Non-functional requirements neither explain the functionality or behavior of the system nor indicate deliverables or other transitional needs.

## Scope

This paper details the non-functional system requirements gathered from Charity App Project stakeholders. The stakeholders then re-evaluated and verified the criteria to confirm that they were accurate, consistent, and required.

## Requirements

- The project must run on Windows/Linux/Mac OS without any change in the codebase and infrastructure.
- The web application must support `Chrome>=104` and `Firefox>=103` browsers.
- The web application must be usable from `1024x768` to `1920x1080` screen resolution.
- The mean time to restore the system after a failure must not exceed `20 minutes`.
- The server must be available to Iran users `95%` of the time every month.
- The app must prevent unauthorized access to all user's data.
- All pages must have less than `4.0 seconds` of `Largest Contentedly Paint`.
