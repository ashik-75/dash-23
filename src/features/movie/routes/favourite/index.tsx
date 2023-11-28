import React from "react";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";
import { useMovies } from "@/features/movie/api/movies";

export const FavouriteList: React.FC = () => {
	const movies = useMovies(
		"account/11765010/favorite/movies?sort_by=created_at.desc"
	);

	return (
		<ScrollList
			isLoading={movies?.isLoading}
			component={MovieComponent}
			items={movies?.data?.results}
			title="Favourite Movies"
		/>
	);
};
