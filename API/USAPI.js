const URL_API = "http://localhost:8080";

const myHeaders = () => {
    const token = localStorage.getItem('authToken');
    return new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    });
};


/* CASOS DE USO PRODUCTOS */

// http://localhost:8080/productos/gama?nombreGama=Alta

const filterByRange = async(range) => {
    try {
        const response = await fetch(`${URL_API}/productos/gama?nombreGama=${encodeURIComponent(range)}`, {
            headers: myHeaders()
        });
        if (response.ok) {
            const data = await response.json();
            return { data, response };
        }
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    } catch (error) {
        console.error('Error fetching data:', error);
        return { data: null, error };
    }
}


export {
    filterByRange
}