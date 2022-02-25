import axios from 'axios';
import {PaginatedResponse} from 'types/api';
import {Instructor, Playlist, PlaylistCategory, PlaylistType} from 'types/tutorials';
import {standardHeaders} from 'utils/requests';

export async function getPlaylistCategories(): Promise<PlaylistCategory[]> {
  const response = await axios.get<PaginatedResponse<PlaylistCategory>>(
    `${process.env.REACT_APP_BACKEND_API}/playlist_categories`,
    standardHeaders(),
  );

  return response.data.results;
}

export async function getTrendingPlaylists(type: PlaylistType, limit?: number): Promise<Playlist[]> {
  let url = `${process.env.REACT_APP_BACKEND_API}/playlists`;

  if (type === PlaylistType.mostRecent) {
    url += `?ordering=-published_at&limit=${limit || 8}`;
  }

  if (type === PlaylistType.popular) {
    url += `?is_featured=true&limit=${limit || 8}`;
  }

  const response = await axios.get<PaginatedResponse<Playlist>>(url, standardHeaders());

  return response.data.results;
}

export async function getPlaylists(category: string): Promise<Playlist[]> {
  const url = `${process.env.REACT_APP_BACKEND_API}/playlists?category=${category}`;

  const response = await axios.get<PaginatedResponse<Playlist>>(url, standardHeaders());

  return response.data.results;
}

export async function getPlaylist(playlistId: string): Promise<Playlist> {
  const response = await axios.get<Playlist>(
    `${process.env.REACT_APP_BACKEND_API}/playlists/${playlistId}`,
    standardHeaders(),
  );

  return response.data;
}

export async function getInstructor(instructorId: string): Promise<Instructor> {
  const response = await axios.get<Instructor>(
    `${process.env.REACT_APP_BACKEND_API}/instructors/${instructorId}`,
    standardHeaders(),
  );

  return response.data;
}
