const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p2",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p3",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p4",
                  type: "string",
                },
              ],
              name: "chooseBeneficiaries",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p2",
                  type: "string",
                },
              ],
              name: "chooseBeneficiaries",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p2",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p3",
                  type: "string",
                },
              ],
              name: "chooseBeneficiaries",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p2",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p3",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p4",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p5",
                  type: "string",
                },
              ],
              name: "chooseBeneficiaries",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "p1",
                  type: "string",
                },
              ],
              name: "chooseBeneficiaries",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
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
                  internalType: "uint256",
                  name: "amount",
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
                      internalType: "uint256",
                      name: "amount",
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
                  name: "amount",
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
