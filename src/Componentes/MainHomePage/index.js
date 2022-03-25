import { useState, useEffect } from "react";
import TitleMain from "../TitleMain";
import "./style.css"
import axios from "axios";



function MainHomePage() {
    const [movies, setMovies] = useState(null)
    useEffect (() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        
        request.then(resposta => {
            console.log(resposta.data)
            setMovies(resposta.data);
        });
    }, []);
    
    
    if(movies === null) {
        
		return (
            <>
                <TitleMain title="Selecione o filme" />
                <div className="loading">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX////X19d5eXlWVlbKysqGhobQ0NCUlJSurq77+/vNzc1zc3PGxsa6urqPj4/Dw8NEREQwMDBmZmbw8PBsbGwkJCSoqKgbGxtOTk7p6el2dnY7Ozuenp7d3d3s7OzW1tYpKSkVFRU4ODhISEgFBQWysrKhoaFeXl6AgIAQEBCmYRUhAAAE7ElEQVR4nO3caXOqMBQGYLaANBJWAQVcatX2///BC1S93bSbyUkz7/OhMx3u1HNuyEJyxLIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAVFzwnuO005w6FEmWK9u2PSEE3yTM86nDkcsvD1UVxNRhyDZJ7uuOOgjJVruElyF1FJKt6rQ1deA5mfMNN70d50Hdmp7jNNva1DHItntgpjejJRLDFwF9M6731CHIltcL6hCkC9amz43htDF+TC0T05eqVjRbUocg22pmfism5vfFhjoC6SYpdQSyhY5DHYJsoVtShyCbvZ5ThyDbrqaOQDrOqCOQLd8Yf5+2W+oIpMuMfyAuC+oIpMta6ghkW62N337LptQRyBaZP5zWE+oIZBOP1BHIljfGb9oEAXUEskXGb2jMU+OnRG78lBi71BFIVxk/mlbGn5ty4zPcG/8IdWf+c/CGOgDpEo86AtnEH5zzv7cQE5GkMH6kOJ5tBkVx3oEYx0Kb82I3Vsyy2Iqf/1U3XimLooiu5Sy0Ooeq7oafdw3ruo4dxrj9p+GnxzvbZ9ncstxJf32sKfH70Jfuouv8rLgy6QVaZTgbMswfnuPdb4dExFgH7I2nEI98zNBPD8Nvfv8AXz/PduzK5q+GGe5OM9i6vy3DLM+sU4ZW4w8ZeiIYdif6DL37z/+mhhlmp0KDYGFZTmSl9jlDwcYMmVWLMcP2CwehBBnGl1f7Q4ZhdaoW8fvGzEIrFucM2eMxw7CZDhmOe2l5OZlMLh80EWRYrC5eeteG08Oj49Thuza0vPTOPrZh3pZlfXmoIciQXy53ed0PZ3E4HlYH5Zt+OPzSPXkv+mF1+eM0y3Boirw5jqVZ2I2DZlwfM3SEdc7Qimfs/1h6JQu9MtxM7NX8PB/mFh/XI2Ez94rOjrJhPqz7Bn3e5+07ZT8fup3d8Ss3PsWMzy8vhaPeMM4c1zThcbHS2fnpijXtrOWx043pD2uanWZrmuFeU0io/3qU4gyZ+gxbtRlW6osxp1zlp4VXJhJZcqX7Cj7FPo3Sr34wir02prJw0KXYL/UOCj+MZM/bV9j55wQDjXV1nXxrMc3zb6CuRMKl+WpCnKj6JJ/qDPj+yrPATUVUB6T1TtEHFVQlQ52i23SlrDu8w9XcpoLu8LBUU0rf0L06I0xV1JnvKTeDWwWPUHlK+T09FV8WWNEWRHH5NXX3tC+wCWvZZ7MBdY1Cm8n9+3mjauF0SbiVu7A5qN3w+oj9IPOvd5UGdZdM4v9yXutQZBIm8u5TJrmXf5Ev7TUWO7ol92t7SctTe6ZNReIikDIe1Bq9rG4tY97nOpVf5M3tt4e5HqPMiZ3cuu6MLTQr7e5mt11dtYkGU/1ry9ktW5HpMk+81CW364t8oV0LDuxmcqO4eKZZHzxLnVukaNc6TRNvOO7vXwy0m2k00b9Xrn+5DM+Z7q8VnNf8N+vwrtZrnv8Q2/x4izo/VDo8D35qvs1+Nm8EjdBykvjAvsi+vcLJV/fXKve0066z7y1x9mmq9RD6Xjjd1uKrY85KNE73V27QFyaPTRB9vuvvR0XS/rH2O1sGTcqvBj+P3dT92y+FCKduVfH93QdXfNZf+pN351tL32+LTSKECE6EYFVVtL7my5fv8aaR818cG//yTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF39AwP/N66cRcRSAAAAAElFTkSuQmCC" />
                </div>
            </>
        )
	}

	return (
        <>
            <TitleMain title="Selecione o filme" />
            <main>
                <section>
                    {movies.map(movie => 
                        <figure id={movie.id}>
                            <img src={movie.posterURL} alt="" />
                        </figure>)
                    }
                </section>
            </main>
        </>
	);
}


export default MainHomePage;