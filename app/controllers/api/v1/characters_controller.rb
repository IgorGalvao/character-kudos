module Api
  module V1
    class CharactersController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        characters = Character.all

        render json: CharacterSerializer.new(characters, options).serialized_json
      end

      def show
        character = Character.find_by(slug: params[:slug])

        render json: CharacterSerializer.new(character, options).serialized_json
      end

      def create
        character = Character.new(character_params)

        if character.save
          render json: CharacterSerializer.new(character).serialized_json
        else
          render json: { error: character.errors.messages }, status: 400
        end
      end

      def update
        character = Character.find_by(slug: params[:slug])

        if character.update(character_params)
          render json: CharacterSerializer.new(character, options).serialized_json
        else
          render json: { error: character.errors.messages }, status: 400
        end
      end

      def destroy
        character = Character.find_by(slug: params[:slug])

        if character.destroy
          head :no_content
        else
          render json: { error: character.errors.messages }, status: 400
        end
      end

      def aggregate_received_kudos
        received = Character.find_by(slug: params[:slug]).received_kudos

        aggregation = [["Kudo", "Quantidade", "Cor"]]
        KudoType.all.each do |type|
          aggregation << [
            (type.icon + " " + type.name),
            received.where(kudo_type: type).count,
            type.color
          ]
        end

        render json: aggregation.to_json
      end

      private

      def character_params
        params.require(:character).permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[received_kudos]}
      end
    end
  end
end