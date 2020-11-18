module Api
  module V1
    class KudosController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        kudo = Kudo.new(kudo_params)

        if kudo.save
          render json: KudoSerializer.new(kudo).serialized_json
        else
          render json: { error: kudo.errors.messages }, status: 400
        end
      end

      def destroy
        kudo = Kudo.find(params[:id])

        if kudo.destroy
          head :no_content
        else
          render json: { error: kudo.errors.messages }, status: 400
        end
      end

      private

      def kudo_params
        params.require(:kudo).permit(:sender_id, :receiver_id, :kudo_type_id)
      end
    end
  end
end