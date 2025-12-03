import HeadingSemiBold from "../components/elements/HeadingSemiBold"
import BodyMedium from "../components/elements/BodyMedium"
import BodyRegular from "../components/elements/BodyRegular"
import BodyLarge from "../components/elements/BodyLarge"
import BodySemiLarge from"../components/elements/BodySemiLarge"
import TextRegular from "../components/elements/TextRegular"
import ButtonMenu from "../components/elements/ButtonMenu"
import upSymbol from "../assets/greenarrow.png"
import notebookSymbol from "../assets/Notebook.png"
import shoppingSymbol from "../assets/Shopping_Bag.png"
import clock from "../assets/clock.png"
import sort from "../assets/sort.png"
import search from "../assets/search.png"
import ratings from "../assets/ratings.png"
import pageLeft from "../assets/pageleft.png"
import pageRight from "../assets/pageright.png"
import { getData } from "../store/redux/courseReducer";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useImages } from "../store/images"
import { useEffect, useState } from "react"

const Category = () => {

    const [sortMenu, setSortMenu] = useState(false)
    const [filterCategory, setFilterCategory] = useState(false)
    const [filterPrice, setFilterPrice] = useState(false)
    const [filterDuration, setFilterDuration] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {images, avatar} = useImages()    
    const { value: course, isLoading, isError } = useSelector((state) => state.course);

    const [filters, setFilters] = useState({
    category: "",
    search: "",
    sortBy: "",
    order: "",
    limit: 4,
    page: 1,
    });

    const handleSortChange = (e) => {
    const value = e.target.name;

    if (value === "lowPrice") {
        setFilters({ ...filters, sortBy: "price", order: "asc" })
    } else if (value === "highPrice") {
        setFilters({ ...filters, sortBy: "price", order: "desc" })
    } else if (value === "aToZ") {
        setFilters({ ...filters, sortBy: "title", order: "asc" })
    } else if (value === "zToA") {
        setFilters({ ...filters, sortBy: "title", order: "desc" })
    } else if (value === "ratingHigh") {
        setFilters({ ...filters, sortBy: "rating", order: "desc" })
    } else if (value === "ratingLow") {
        setFilters({ ...filters, sortBy: "rating", order: "asc" })
    } else {
        // reset sort
        setFilters({ ...filters, sortBy: "", order: "" })
    }
    };

    const handleChange = (e) => {
    setFilters({
    ...filters,
    [e.target.name]: e.target.value,
    })
    }


    const handleReset = () => {
    setFilters({
    category: "",
    search: "",
    sortBy: "",
    order: "",
    avg_rating: ""
    });
    };

    useEffect(() => {
        dispatch(getData(filters))   
    }, [dispatch, filters])

    return (
        <div className="flex flex-col w-full justify-start items-center 
    px-[20px] py-[28px] gap-[24px] sm:gap-[36px] sm:px-[120px] sm:py-[64px] bg-background">
            <div className="w-full flex flex-col gap-[10px] ">
                <HeadingSemiBold className="text-left">Koleksi Video Pembelajaran Unggulan</HeadingSemiBold>
                <BodyRegular className="text-left text-dark-secondary text-sm sm:text-base">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</BodyRegular>
            </div>
            <div className="flex flex-col w-full sm:grid sm:grid-cols-[auto_70%] gap-[24px] sm:gap-[42px]">
                <div className="flex flex-col gap-[12px] p-[16px] bg-white border rounded-[10px] border-other-border h-fit">
                    <div className="flex flex-row justify-between">
                        <button><HeadingSemiBold size="filter" className="text-dark-secondary" >Filter</HeadingSemiBold></button>
                        <button onClick={handleReset}><BodyMedium className="text-error-default">Reset</BodyMedium></button>
                    </div>

                    <div  className="cursor-pointer border border-other-border py-[12px] px-[16px] rounded-[10px] 
                    text-primary flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                        <span onClick={() => setFilterCategory(!filterCategory)} className="flex flex-row justify-start gap-[6px]">
                            <img src={notebookSymbol} alt="Notebook" />
                                <BodyMedium className="text-base">
                                    Bidang Studi
                                </BodyMedium>
                        </span>
                            <img onClick={() => setFilterCategory(!filterCategory)} src={upSymbol} alt="Up" />
                        </div>

                        {filterCategory && (
                        <div className="flex flex-col mt-[18px]">
                            <span className="flex flex-row p-1 gap-[12px]">
                            <input onChange={handleChange} name="category" value="Pemasaran" type="checkbox" />
                            <label htmlFor=""><TextRegular>Pemasaran</TextRegular></label>
                            </span>

                            <span className="flex flex-row p-1 gap-[12px]">
                            <input onChange={handleChange} name="category" value="Digital" type="checkbox" />
                            <label htmlFor=""><TextRegular>Digital & Teknologi</TextRegular></label>
                            </span>

                            <span className="flex flex-row p-1 gap-[12px]">
                            <input onChange={handleChange} name="category" value="Pengembangan" type="checkbox" />
                            <label htmlFor=""><TextRegular>Pengembangan Diri</TextRegular></label>
                            </span>

                            <span className="flex flex-row p-1 gap-[12px]">
                            <input onChange={handleChange} name="category" value="Bisnis" type="checkbox" />
                            <label htmlFor=""><TextRegular>Bisnis Manajemen</TextRegular></label>
                            </span>

                            <span className="flex flex-row p-1 gap-[12px]">
                            <input onChange={handleChange} name="category" value="Desain" type="checkbox" />
                            <label htmlFor=""><TextRegular>Desain Grafis</TextRegular></label>
                            </span>
                        </div>
                        )}
                        </div>


                    <div className="cursor-pointer border border-other-border py-[12px] px-[16px] rounded-[10px] 
                    text-primary flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                        <span onClick={() => setFilterPrice(!filterPrice)} className="flex flex-row justify-start gap-[6px]">
                            <img src={shoppingSymbol} alt="Shopping" />
                                <BodyMedium className="text-base">
                                    Harga
                                </BodyMedium>
                        </span>
                            <img onClick={() => setFilterPrice(!filterPrice)} src={upSymbol} alt="Up" />
                        </div>

                        {filterPrice && (
                        <div className="flex flex-col mt-[18px]">
                            <span className="flex flex-row p-1 gap-[12px]">
                            <input onClick={handleSortChange} name="lowPrice" type="checkbox" />
                            <label htmlFor=""><TextRegular>Terendah</TextRegular></label>
                            </span>
                            <span className="flex flex-row p-1 gap-[12px]">
                            <input onClick={handleSortChange} name="highPrice" type="checkbox" />
                            <label htmlFor=""><TextRegular>Tertinggi</TextRegular></label>
                            </span>
                        </div>
                        )}
                        </div>


                    <div className="cursor-pointer border border-other-border py-[12px] px-[16px] rounded-[10px] 
                    text-primary flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                        <span onClick={() => setFilterDuration(!filterDuration)} className="flex flex-row justify-start gap-[6px]">
                            <img src={clock} alt="Notebook" />
                                <BodyMedium className="text-base">
                                    Rating
                                </BodyMedium>
                        </span>
                            <img onClick={() => setFilterDuration(!filterDuration)} src={upSymbol} alt="Up" />
                        </div>

                        {filterDuration && (
                        <div className="flex flex-col mt-[18px]">
                            <span className="flex flex-row p-1 gap-[12px]">
                            <input onClick={handleSortChange} name="ratingHigh" type="checkbox" />
                            <label htmlFor=""><TextRegular>Tertinggi</TextRegular></label>
                            </span>
                            <span className="flex flex-row p-1 gap-[12px]">
                            <input onClick={handleSortChange} name="ratingLow" type="checkbox" />
                            <label htmlFor=""><TextRegular>Terendah</TextRegular></label>
                            </span>
                        </div>
                        )}
                        </div>
                </div>
                <div className="flex flex-col w-full gap-[24px] sm:gap-[32px]">
                    <div className="relative flex flex-row justify-between sm:justify-end gap-[16px]">
                        <button onClick={() => setSortMenu(!sortMenu)} className="cursor-pointer border w-1/2 sm:w-fit border-other-border py-[13px] px-[17px] rounded-[10px] flex flex-row justify-between items-center bg-white">
                            <BodyMedium className="text-dark-secondary">Urutkan</BodyMedium>
                            <img src={sort} alt="Sort" />
                        </button>
                        <div className="border border-other-border py-[13px] px-[17px] rounded-[10px] flex flex-row gap-[8px] justify-between items-center bg-white">
                            <input name="search" onChange={handleChange} className="flex-1 w-1/2 sm:w-38 font-medium leading-[140%] tracking-[0.2px] text-base text-dark-secondary" 
                            type="text" 
                            placeholder="Cari Kelas"/>
                            <img src={search} alt="Search" />
                        </div>

                        {sortMenu && (
                        <div className="absolute top-15 sm:top-[62px] sm:right-[236px] bg-white shadow-md border border-other-border z-50 w-[156px] rounded-[10px]">
                            <ul className="flex flex-col">
                                <li className="py-[10px] px-[12px] hover:bg-gray-100"><ButtonMenu onClick={handleSortChange} name="lowPrice" className="text-sm">Harga Terendah</ButtonMenu></li>
                                <li className="py-[10px] px-[12px] hover:bg-gray-100"><ButtonMenu onClick={handleSortChange} name="highPrice" className="text-sm">Harga Tertinggi</ButtonMenu></li>
                                <li className="py-[10px] px-[12px] hover:bg-gray-100"><ButtonMenu onClick={handleSortChange} name="aToZ" className="text-sm">A to Z</ButtonMenu></li>
                                <li className="py-[10px] px-[12px] hover:bg-gray-100"><ButtonMenu onClick={handleSortChange} name="zToA" className="text-sm">Z to A</ButtonMenu></li>
                                <li className="py-[10px] px-[12px] hover:bg-gray-100"><ButtonMenu onClick={handleSortChange} name="ratingLow" className="text-sm">Rating Terendah</ButtonMenu></li>
                                <li className="py-[10px] px-[12px] hover:bg-gray-100"><ButtonMenu onClick={handleSortChange} name="ratingHigh" className="text-sm">Rating Tertinggi</ButtonMenu></li>
                            </ul>
                        </div>
                        )}

                    </div>
                    <div className="flex flex-col gap-[12px] w-full">
                        {isLoading && 
                            <div className='flex justify-center'>
                                <p>Loading...</p>
                            </div>          
                        }

                        {isError && (
                            <div className='flex flex-col justify-center items-center'>
                                <p>Error</p>
                                <button className='border p-1 cursor-pointer' onClick={()=> getData()}>Reload</button>
                            </div>)
                        }

                        {(!isLoading && !isError) && (
                            <div>
                                <div className='flex flex-col items-center justify-end w-full gap-[20px] sm:gap-[24px] 
                                sm:grid sm:grid-cols-[auto_auto]'>

                                {course.map((item, index) => {
                                    const randomIndex = Math.floor(Math.random() * images.length)
                                    const randomImage = images[randomIndex]
                                    const randomAvatar = avatar[randomIndex]        
                                    return (
                                        <div key={index} className="border border-other-border flex flex-col items-center justify-center w-full max-w-sm p-[16px] sm:p-[20px] 
                                        gap-[16px] rounded-[10px] bg-white">
                                        <div className='flex w-full flex-col gap-[9px] sm:gap-[16px] justify-center'>
                                            <div className='flex justify-start items-end flex-row sm:grid gap-[12px] sm:gap-[16px]'>

                                            <div className="flex items-center justify-center h-fit">
                                            <img className='w-[90px] sm:w-[344px] items-center aspect-square sm:aspect-16/9 object-cover object-center rounded-[10px]' src={randomImage} alt="Product" />
                                            </div>

                                            <div className='flex flex-col gap-[8px] sm:gap-[16px]'>
                                            <div className='flex flex-col gap-[8px]'>
                                            <HeadingSemiBold size="card" className="text-left cursor-pointer">{item.title}</HeadingSemiBold>
                                            <BodyMedium className="hidden sm:block sm:text-base text-dark-secondary">{item.description.length > 74 ? item.description.slice(0, 74) : item.description}</BodyMedium>
                                            </div>

                                            <div className='flex flex-row w-full items-center gap-[10px] '>
                                                <img className='w-[36px] aspect-square sm:w-[40px] sm:aspect-square' src={randomAvatar} alt="Avatar" />
                                                <div className='flex flex-col'>
                                                <BodyMedium className="text-sm sm:text-base cursor-pointer whitespace-nowrap">Giyu Tomioka</BodyMedium>
                                                <div className='flex flex-row gap-[4px] items-center'>
                                                <BodyRegular className="text-xs sm:text-sm text-dark-secondary whitespace-nowrap">Senior Accountant</BodyRegular>
                                                <BodyRegular className="hidden sm:inline text-dark-secondary sm:text-sm">di</BodyRegular>
                                                <BodyLarge className="text-dark-secondary hidden sm:inline sm:text-sm">Gojek</BodyLarge>
                                                </div>
                                                </div>
                                            </div>
                                            </div>

                                            </div>
                                            
                                            <div className='flex flex-row items-center justify-between w-full'>
                                                <div className='flex flex-row items-center gap-[8px]'>
                                                <img src={ratings} alt="" />
                                                <BodyMedium className="text-xs sm:text-sm text-dark-secondary underline whitespace-nowrap">{`${item.avg_rating} (${item.total_reviews})`}</BodyMedium>
                                                </div>
                                                <HeadingSemiBold size="price" className="text-primary">{`Rp ${item.price}K`}</HeadingSemiBold>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                })}       
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="h-[40px] w-full flex flex-row justify-end items-center gap-[6px]">
                        <button className="h-full px-[8px] bg-other-base-background rounded-[4px] cursor-pointer"><img src={pageRight} alt="Right" /></button>
                        <button className="h-full px-[15.5px] bg-secondary rounded-[4px] text-white cursor-pointer"><BodySemiLarge>1</BodySemiLarge></button>
                        <button className="h-full px-[15.5px] rounded-[4px] text-dark-secondary cursor-pointer"><BodySemiLarge>2</BodySemiLarge></button>
                        <button className="h-full px-[8px] bg-other-base-background rounded-[4px] cursor-pointer"><img src={pageLeft} alt="Left" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category