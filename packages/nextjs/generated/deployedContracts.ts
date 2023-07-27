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
                  name: "personName",
                  type: "string",
                },
              ],
              name: "makePerson",
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
