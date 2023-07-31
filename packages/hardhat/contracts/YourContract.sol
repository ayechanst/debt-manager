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

	// the node
	struct Person {
		string name;
		// a person can be connected with any amount of people
	}

	// an edge will be created for each beneficiary and "given to them"
	struct Edge {
		string nameOfBuyer;
		string nameOfBeneficiary;
		string purchaseName;
		uint256 debtAmount;
	}

	function createPerson(string memory personName) public {
		Person memory newPerson;
		newPerson.name = personName;
		nodes.push(newPerson);
	}

	function createEdge(string memory nameOfBuyer, string memory nameOfBeneficiary, string memory purchaseName, uint256 debtAmount) public returns (Edge memory) {
		Edge memory newEdge;
		newEdge.nameOfBuyer = nameOfBuyer;
		newEdge.nameOfBeneficiary = nameOfBeneficiary;
		newEdge.purchaseName = purchaseName;
		newEdge.debtAmount = debtAmount;
		return newEdge;
	}

	function logPurchase(uint256 debtAmount, string memory nameOfBuyer, string memory purchaseName, string[] memory beneficiaries) public {
		uint256 numOfPeople = beneficiaries.length;
		require(numOfPeople > 0, "division by 0");
		uint256 dividedCost = debtAmount / numOfPeople;
		for (uint256 i = 0; i < numOfPeople; i++) {
			string memory beneficiary = beneficiaries[i];
			Edge memory newEdge = createEdge(nameOfBuyer, beneficiary, purchaseName, dividedCost);
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















}
