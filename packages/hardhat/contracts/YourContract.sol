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
	}

	struct Edge {
		string nameOfBuyer;
		uint256 amount;
	}

	Edge[] edges;


	function createPerson(string memory personName) public {
		Person memory newPerson;
		newPerson.name = personName;
		people[personName] = newPerson;
	}


	function createEdge(string memory nameOfBuyer,
					    uint256 amount) public returns (Edge memory) {
		Edge memory newEdge;
		newEdge.nameOfBuyer = nameOfBuyer;
		newEdge.amount = amount;
		return newEdge;
	}

	function logPurchase(string memory buyerName,
						 uint256 amount,
					     ) public {
		people[buyerName].balance = amount;
	}

	function viewPerson(string memory personName) public view returns (Person memory) {
		return people[personName];
	}



}
