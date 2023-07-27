const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
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
            {
              inputs: [],
              name: "totalBalance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
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
