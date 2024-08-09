const URL_API = "http://localhost:8080";

const myHeaders = () => {
    const token = localStorage.getItem('authToken');
    return new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    });
};


const getData = async (endpoint) => {
    try {
        const response = await fetch(`${URL_API}/${endpoint}`, {
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
};


async function getDataTry(endpoint) {
    try {
        const response = await fetch(`${URL_API}/${endpoint}`, {
            headers: myHeaders()
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.error('Error en la solicitud GET:', error);
        throw error; // Re-throw the error for handling in the caller
    }
}


const getElementData = async(endpoint, id) => {
    try {
        return await fetch(`${URL_API}/${endpoint}/${id}`, {
            headers: myHeaders()
        });
    } catch(error){
        console.log(error);
    }
};

const updateData = async (newData, endpoint, id) => {
    try {
        const response = await fetch(`${URL_API}/${endpoint}/${id}`, {
            method: "PATCH",
            headers: myHeaders(),
            body: JSON.stringify(newData)
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el dato');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en la solicitud PATCH:', error.message);
        throw error;
    }
};

const postData = async (datos, endpoint) => {
    try {
        const response = await fetch(`${URL_API}/${endpoint}`, {
            method: "POST",
            headers: myHeaders(),
            body: JSON.stringify(datos)
        });

        if (!response.ok) {
            const errorMessage = await response.text(); 
            console.error(`Error ${response.status}: ${errorMessage}`);
        }

        return response;
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
};


const deleteData = async (endpoint, id) => {
    try {
        return await fetch(`${URL_API}/${endpoint}/${id}`, {
            method: "DELETE",
            headers: myHeaders(),
        });
    } catch (error) {
        console.error('Error en la solicitud Delete:', error.message);
    }
};

export {
    deleteData,
    getData,
    postData,
    updateData,
    getElementData,
    getDataTry
};

