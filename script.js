// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    const boulevards = ["Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard Mortier", "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
        //filter is a function which takes an item of the array and passes it into a function

    const fifteen = inventors.filter(inventor => {
      if(inventor.year >= 1500 && inventor.year <= 1599) {
        return true;
      }
    });

    console.table(fifteen);

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    const names = inventors.map(inventor => {
      return `${inventor.first} ${inventor.last}`;
    });

    console.table(names);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest  
    // in sort, the a and b represents two adjacent items in array

    // can be written as follows using arrow function & a ternary operator:
    // const birthorder = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

    const birthorder = inventors.sort(function (a, b) {
      if (a.year > b.year) {
        return 1;
      } else {
        return -1;
      }
    });

    console.table(birthorder);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    // with this method you need an initializer to set total to 0, since you pass a function that takes two args - the total, and the next item in the array.
    const totalYears = inventors.reduce(function(total, num) {
      return total + (num.passed - num.year);
    }, 0);

    console.log(`Total Number of years all inventors lived: ${totalYears}`);

    // 5. Sort the inventors by years lived
    const byOldest = inventors.sort((a,b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1);
    console.table(byOldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    //used includes() to detect string 'de'

    // Wes' solution via accessing the DOM! vvv

    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));
    // console.table(de);

    const deBoulevards = boulevards.filter(function(item) {
      if (item.includes('de') == true) {
        return true;
      }
    });

    

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const sortLast = people.sort((a,b) => a > b ? 1 : -1);

    console.table(sortLast);

    //Wes' solution uses split() to separate the first and last names  vvv
    // const alpha = people.sort(function(a,b) {
    //   const [aLast, aFirst] = a.split(', ');
    //   const [bLast, bFirst] = b.split(', ');
    //   return aLast > bLast ? 1 : -1;
    // });

    // console.log(alpha);


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    // Wes' solution vv
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'kangaroo' ];

    const vehicle = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});

    console.log(vehicle);