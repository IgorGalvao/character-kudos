module Api
  module V1
    class KudoTypesController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        kudo_types = KudoType.all

        render json: KudoTypeSerializer.new(kudo_types).serialized_json
      end

      def available
        current_character = Character.first          # TODO: Implement login
        available_kudos = current_character.available_kudos

        available_kudos_array = []
        available_kudos.each do |type, count|
          available_kudos_array << {
            "name": type.name,
            "icon": type.icon,
            "color": type.color,
            "count": count
          }
        end

        render json: available_kudos_array.to_json
      end

    end
  end
end