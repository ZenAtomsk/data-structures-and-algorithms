# Data Structures and Algorithms

## Create a copy of this repository

1. Create a new repository in your GitHub account called `data-structures-and-algorithms`
1. Clone the empty repository to your machine
1. Choose the "Download" option under "Clone or Download" for this repository
1. Copy that .zip file inside of the local `data-structures-and-algorithms` repo created in step 2
1. Unzip the file there
1. Remove the .zip file
1. Run the command `npm install` from the repository root directory
1. Do an `ACP` of the `data-structures-and-algorithms` repository

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `data-structures-and-algorithms` repository, at the top level is a folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

### 401 Data Structures, Code Challenges

- Each Data Structure should be implemented separately in a language specific manner, in a properly named folder.
  - i.e. `linked-lists`
- For daily challenges:
  - Each implementation should have a challenges folder, named `challenges`
  - Within the challenges folder, a subfolder bearing the name of the challenge
    - i.e. `remove-duplicates`
  - Within the proper subfolder:
    - A README.md that will house your challenge summary, whiteboard photos
    - Your implementation and tests for the code challenge
    - Perform your work in accordance with your 401 language's instructions

The final structure should resemble this:

```bash
  data-structures-and-algorithms
  |
  ├── code-challenges
  │  └── challenge-01.test.js
  │  └── challenge-02.test.js
  │  └── ...
  |
  ├── [language]
  │   └── [data-structure-name]
  │       └── challenges
  │   └── [data-structure-name]
  │       └── challenges
  │   └── [data-structure-name]
  │       └── challenges
  │   └── ...
  |
  ├── node_modules
  |
  ├── .github
  │   └── workflows
  │       └── javascript-tests.yml
  │
  ├── .eslintrc.json
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  └── README.md
```

--- 

## Table of Contents

- [401 code challenge: Class 01 array-reverse](javascript/code-challenges/arrayReverse/README.md)
- [401 code challenge: class 02 array-shift](javascript/code-challenges/arrayShift/README.md)
- [401 code challenge: class 03 array-binary-search](javascript/code-challenges/arrayBinarySearch/README.md)
- [401 code challenge: class 05: linked list](javascript/code-challenges/linkedList/README.md)
- [401 code challenge: class 06: linked list](javascript/code-challenges/linkedList/README.md)
- [401 code challenge: class 07: linked list](javascript/code-challenges/linkedList/README.md)
- [401 code challenge 11: Queue with Stacks](javascript/code-challenges/queuesWithStacks/README.md)
- [401 code challenge 12: Animal Shelter](javascript/code-challenges/fifoAnimalShelter/README.md)
- [401 code challenge 13: Multi Bracket Validation](javascript/code-challenges/multiBracketValidation/README.md)
- [401 code Challenge 15: Binary Tree and BST Implementation](javascript/code-challenges/tree/README.md)