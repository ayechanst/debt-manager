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
	// go to line 88 or so

	// the node
	struct Person {
		address id;
		string name;
		uint256 balance;
		Edge[] edges;
	}

	struct Edge {
		string nameOfBuyer;
		string[] namesOfBeneficiaries;
		uint256 amount;
	}

	// the graph data structure, the string here is the name of the person
	mapping(string => Person) people;

	// stores arrays of beneficiaries
	mapping(string => string[]) beneficiariesStorage;


	function createPerson(string memory personName) public {
		Person memory newPerson;
		newPerson.name = personName;
		people[personName] = newPerson;
	}

	// function that creates an array of people who benefitted, overload style
	function createBeneficiaries(string memory purchaseName, string memory person1) public {
		beneficiariesStorage[purchaseName] = [person1];
	}
	function createBeneficiaries(string memory purchaseName,
								 string memory person1,
							     string memory person2) public {
		beneficiariesStorage[purchaseName] = [person1, person2];
	}
	function createBeneficiaries(string memory purchaseName,
								 string memory person1,
								 string memory person2,
								 string memory person3) public {
		beneficiariesStorage[purchaseName] = [person1, person2, person3];
	}
	function createBeneficiaries(string memory purchaseName,
								 string memory person1,
								 string memory person2,
								 string memory person3,
							     string memory person4) public {
		beneficiariesStorage[purchaseName] = [person1, person2, person3, person4];
	}

	// the edges
	function createEdge(string memory nameOfBuyer,
						string memory purchaseName,
					    uint256 amount) public returns (Edge memory) {
		// we want to pass a transaction struct into the edges array of people
		Edge memory newEdge;
		newEdge.nameOfBuyer = nameOfBuyer;
		newEdge.namesOfBeneficiaries = beneficiariesStorage[purchaseName];
		newEdge.amount = amount;
		return newEdge;
	}


	function logPurchase(string memory buyerName,
						 uint256 amount,
					     string memory purchaseName) public {
		people[buyerName].balance = amount;
		// we still need a way for them to input beneficiaries, but mabye
		// in the UI?
		Edge memory newEdge = createEdge(buyerName, purchaseName, amount);
		// this next line is problematic we need to find a work around
		// million dollar question: how to push data into an array that is in a struct?
		people[buyerName].edges = edges.push(newEdge);
	}

	function viewPerson(string memory personName) public view returns (Person memory) {
		return people[personName];
	}

	function viewBeneficiaries(string memory purchaseName) public view returns (string[] memory) {
		return beneficiariesStorage[purchaseName];
	}





}
