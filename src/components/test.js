useEffect(() => {
    const fetchpics = async () => {
      setLoading(true);
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: "coding",
          page: 1,
          per_page: 5
        },
        headers: {
          Authorization:
            "Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"
        }
      });
      setPictures(response.data.results);
      setLoading(false); 
    }
    fetchpics(); 
  }, []); 