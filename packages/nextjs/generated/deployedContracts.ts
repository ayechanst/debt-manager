const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "debtAmount",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "nameOfBuyer",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "nameOfBeneficiary",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "dividedCost",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "sentFrom",
                  type: "string",
                },
              ],
              name: "createEdge",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "nameOfBuyer",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "nameOfBeneficiary",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "purchaseName",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "purchaseAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "debtAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "edgeOf",
                      type: "string",
                    },
                  ],
                  internalType: "struct YourContract.Edge",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "groupName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "person",
                  type: "address",
                },
              ],
              name: "createGroup",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "personName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "sentFrom",
                  type: "string",
                },
              ],
              name: "createPerson",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getDebts",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "nameOfBuyer",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "nameOfBeneficiary",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "purchaseName",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "purchaseAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "debtAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "edgeOf",
                      type: "string",
                    },
                  ],
                  internalType: "struct YourContract.Edge[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getGroups",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "groupName",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "groupOwner",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "groupKey",
                      type: "uint256",
                    },
                    {
                      internalType: "string[]",
                      name: "groupMembers",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct YourContract.Group[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getPeople",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "id",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "groupMemberOf",
                      type: "string",
                    },
                  ],
                  internalType: "struct YourContract.Person[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "debtAmount",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "nameOfBuyer",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "beneficiaries",
                  type: "string[]",
                },
                {
                  internalType: "string",
                  name: "sentFrom",
                  type: "string",
                },
              ],
              name: "logPurchase",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        YourContract: {
          address: "0x86ee026F1DBD75b634B5687960970e0bbDB5F845",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "debtAmount",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "nameOfBuyer",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "nameOfBeneficiary",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "dividedCost",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "sentFrom",
                  type: "string",
                },
              ],
              name: "createEdge",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "nameOfBuyer",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "nameOfBeneficiary",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "purchaseName",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "purchaseAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "debtAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "edgeOf",
                      type: "string",
                    },
                  ],
                  internalType: "struct YourContract.Edge",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "groupName",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "person",
                  type: "address",
                },
              ],
              name: "createGroup",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "personName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "sentFrom",
                  type: "string",
                },
              ],
              name: "createPerson",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getDebts",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "nameOfBuyer",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "nameOfBeneficiary",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "purchaseName",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "purchaseAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "debtAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "edgeOf",
                      type: "string",
                    },
                  ],
                  internalType: "struct YourContract.Edge[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getGroups",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "groupName",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "groupOwner",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "groupKey",
                      type: "uint256",
                    },
                    {
                      internalType: "string[]",
                      name: "groupMembers",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct YourContract.Group[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getPeople",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "id",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "groupMemberOf",
                      type: "string",
                    },
                  ],
                  internalType: "struct YourContract.Person[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "debtAmount",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "nameOfBuyer",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string[]",
                  name: "beneficiaries",
                  type: "string[]",
                },
                {
                  internalType: "string",
                  name: "sentFrom",
                  type: "string",
                },
              ],
              name: "logPurchase",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
