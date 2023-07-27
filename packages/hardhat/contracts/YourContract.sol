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

	// the node
	struct Person {
		address id;
		string name;
		uint256 balance;
		string[] edges;
	}

	struct Edge {
		string nameOfBuyer;
		string[] namesOfBeneficiaries;
		uint256 amount;
	}

	// the graph data structure
	mapping(string => Person) people;


	function makePerson(string memory personName) public {
		Person memory newPerson;
		newPerson.name = personName;
		people[personName] = newPerson;
	}

	// the edges
	function createEdge() {
		// we want to pass a transaction struct into the edges array of people
	}



	function logPurchase(string memory buyerName, uint256 amount) public {
		people[buyerName].balance = amount;
	}

	function viewPerson(string memory personName) public view returns (Person memory) {
		return people[personName];
	}





}
