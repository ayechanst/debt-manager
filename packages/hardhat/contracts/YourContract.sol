//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract YourContract {

	// graph data structure
	Person[] nodes;
	// all transactions go here
	Edge[] edges;

	struct Person {
		string name;
		address personHostId;
		address walletId;
	}

	struct Edge {
		string nameOfBuyer;
		string nameOfBeneficiary;
		string purchaseName;
		uint256 purchaseAmount;
		uint256 debtAmount;

	}

	struct Group {
		string groupName;
		address groupId;
	}

		// the graphs are stored in here
	mapping(address => Edge[]) graphs;

	mapping(address => Group[]) keys;

	mapping(address => Person[]) people;

	function createPerson(string memory personName, address walletId) public {
		Person memory newPerson;
		newPerson.name = personName;
		newPerson.personHostId = msg.sender;
		newPerson.walletId = walletId;
		nodes.push(newPerson);
	}

	    // only account members can do this
	function createEdge(string memory nameOfBuyer, string memory nameOfBeneficiary, string memory purchaseName, uint256 purchaseAmount, uint256 debtAmount) public returns (Edge memory) {
		Edge memory newEdge;
		newEdge.nameOfBuyer = nameOfBuyer;
		newEdge.nameOfBeneficiary = nameOfBeneficiary;
		newEdge.purchaseName = purchaseName;
		newEdge.purchaseAmount = purchaseAmount;
		newEdge.debtAmount = debtAmount;
		return newEdge;
	}


	// require that person making the transaction is a member of this account
	function logPurchase(uint256 debtAmount, string memory nameOfBuyer, string memory purchaseName, string[] memory beneficiaries) public {
		uint256 numOfPeople = beneficiaries.length;
		require(numOfPeople > 0, "division by 0");
		uint256 dividedCost = debtAmount / numOfPeople;
		for (uint256 i = 0; i < numOfPeople; i++) {
			string memory beneficiary = beneficiaries[i];
			Edge memory newEdge = createEdge(nameOfBuyer, beneficiary, purchaseName, debtAmount, dividedCost);
			newEdge.edgeId = msg.sender;
			edges.push(newEdge);
		}
	}

	function getPeople() public view returns (string[] memory) {
		uint256 numOfPeople = nodes.length;
		string[] memory peopleNames = new string[](numOfPeople);
		for (uint256 i = 0; i < numOfPeople; i++) {
			peopleNames[i] = nodes[i].name;
		}
		return peopleNames;
	}

	// this will only return edges created by a group of people
	function getDebts() public view returns (Edge[] memory) {
		Edge[] memory accountEdges;
		for (uint256 i = 0; i < edges.length; i++) {
			if (edges[i].edgeId == msg.sender) {
				// or also if msg.sender is part of the group
				accountEdges[i] = edges[i];
			}
		}
		return accountEdges;
	}


}
