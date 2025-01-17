export const fetchPersonData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=3');
      const data = await response.json();
      return data.results.map((person) => ({
        avatar: person.picture.large,
        firstName: person.name.first,
        lastName: person.name.last,
        city: person.location.city,
      }));
    } catch (error) {
      console.error('Error fetching person data:', error);
      return [];
    }
  };
  