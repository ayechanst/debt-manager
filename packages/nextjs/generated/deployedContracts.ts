const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
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
                    {
                      internalType: "address",
                      name: "edgeId",
                      type: "address",
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
                {
                  internalType: "address",
                  name: "walletId",
                  type: "address",
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
                      internalType: "address",
                      name: "edgeId",
                      type: "address",
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
