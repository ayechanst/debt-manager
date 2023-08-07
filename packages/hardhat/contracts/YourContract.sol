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

	struct Person {
		string name;
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
		address groupOwner;
		uint256 groupKey;
		string[] groupMembers;
	}

	// the graphs are stored in here
	mapping(uint256 => Edge[]) graph;
	// groupId => Group Struct
	mapping(uint256 => Group) groups;
	mapping(address => Person) people;

	uint256[] groupKeys;
	uint256 currentKey = 0;

	// group name should display on the UI, then we can grab it later?
	function createGroup(string memory groupName, address person) public {
		Group memory newGroup;
		uint256 freshKey = currentKey + 1;
		currentKey = freshKey;
		newGroup.groupName = groupName;
		newGroup.groupOwner = person;
		newGroup.groupKey = freshKey;
		groups[freshKey] = newGroup;
		groupKeys.push(freshKey);
	}

	// this function will not be this simple
	function getGroups() public view returns (Group[] memory) {
		Group[] memory allGroups = new Group[](groupKeys.length);
		for (uint256 i = 0; i < groupKeys.length; i++) {
			allGroups[i] = groups[groupKeys[i]];
		}
		return allGroups;
	}

	function createPerson(string memory personName) public {
		Person memory newPerson;
		newPerson.name = personName;
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
		// find a unique identifier to determine what group this is (key)
		uint256 numOfPeople = beneficiaries.length;
		require(numOfPeople > 0, "division by 0");
		uint256 dividedCost = debtAmount / numOfPeople;
		for (uint256 i = 0; i < numOfPeople; i++) {
			string memory beneficiary = beneficiaries[i];
			Edge memory newEdge = createEdge(nameOfBuyer, beneficiary, purchaseName, debtAmount, dividedCost);
			// this will push these edges to an array of edges specific to the key
			//graph[address] = newEdge;
			// edges.push(newEdge);
		}
	}

	// function getPeople() public view returns (string[] memory) {
	// 	uint256 numOfPeople = nodes.length;
	// 	string[] memory peopleNames = new string[](numOfPeople);
	// 	for (uint256 i = 0; i < numOfPeople; i++) {
	// 		peopleNames[i] = nodes[i].name;
	// 	}
	// 	return peopleNames;
	// }

	// this will only return edges created by a group of people
	// function getDebts() public view returns (Edge[] memory) {
	// 	Edge[] memory accountEdges;
	// 	for (uint256 i = 0; i < edges.length; i++) {
	// 		if (edges[i].edgeId == msg.sender) {
	// 			// or also if msg.sender is part of the group
	// 			accountEdges[i] = edges[i];
	// 		}
	// 	}
	// 	return accountEdges;
	// }


}
