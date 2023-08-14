export interface MovieCardProps {
    title: string;
    url: string;
    description: string;
    isFavorite: boolean;
    onPress?: () => void;
}