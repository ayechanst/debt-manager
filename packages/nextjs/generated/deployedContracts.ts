const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
          abi: [
            {
              inputs: [
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
                  name: "personName",
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
              name: "getPeople",
              outputs: [
                {
                  internalType: "string[]",
                  name: "",
                  type: "string[]",
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
