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
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "person1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "person2",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "person3",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "person4",
                  type: "string",
                },
              ],
              name: "createBeneficiaries",
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
                  name: "person1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "person2",
                  type: "string",
                },
              ],
              name: "createBeneficiaries",
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
                  name: "person1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "person2",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "person3",
                  type: "string",
                },
              ],
              name: "createBeneficiaries",
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
                  name: "person1",
                  type: "string",
                },
              ],
              name: "createBeneficiaries",
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
                  name: "purchaseName",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "createEdge",
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
              ],
              name: "createPerson",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "buyerName",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "logPurchase",
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
              ],
              name: "viewBeneficiaries",
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
                  internalType: "string",
                  name: "personName",
                  type: "string",
                },
              ],
              name: "viewPerson",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "id",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "balance",
                      type: "uint256",
                    },
                    {
                      internalType: "string[]",
                      name: "edges",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct YourContract.Person",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
